import {HTTP_GET, HTTP_POST, RETRY_COUNT, RETRY_DELAY} from "@/constants/http-request";

const codeMessage: { [key: number]: string } = {
    200: 'The server successfully returned the requested data. ',
    201: 'New or modified data is successful. ',
    202: 'A request has entered the background queue (asynchronous task). ',
    204: 'Delete data successfully. ',
    301: 'The requested data has been permanently transferred to a new URL. ',
    302: 'The requested data is located at a different URL temporarily. ',
    303: 'See other. ',
    400: 'The request was sent with an error. The server did not perform any operations to create or modify data. ',
    401: 'The user does not have permission (token, username, password is incorrect). ',
    403: 'The user is authorized, but access is prohibited. ',
    404: 'The request sent is for a record that does not exist, and the server is not operating. ',
    406: 'The requested format is not available. ',
    410: 'The requested resource is permanently deleted and will no longer be available. ',
    422: 'When creating an object, a validation error occurred. ',
    500: 'An error occurred on the server. Please check the server. ',
    502: 'Gateway error. ',
    503: 'The service is unavailable, the server is temporarily overloaded or maintained. ',
    504: 'The gateway timed out. ',
};

/**
 * Exception handler
 * @returns
 *
 * @param response
 */
const errorHandler = (response: Response) => {
    console.log(`Error on path ${response.url}, status ${response.status}, description: ${codeMessage[response.status]}, method: ${response.type}`)
    return {
        code: response.status,
        message: codeMessage[response.status] || response.statusText,
    };
}

const handleResponse = async (response: Response) => {
    if (response.status >= 200 && response.status < 300) {
        return {
            code: response.status,
            message: response.headers.get('Content-Type') === 'application/json' ? await response.json() : await response.text()
        }
    }
    return errorHandler(response)
}

export const POST = async <T>(url: string, data: any): Promise<{ code: number; message: T }> => {
    const fetchRequest = () => fetch(url, {
        method: HTTP_POST,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const response = await retry(fetchRequest, RETRY_COUNT, RETRY_DELAY)
    return await handleResponse(response);
}

// quiero hacer que el get reciba el tipo de dato que va a retornar
export const GET = async <T>(url: string): Promise<{ code: number; message: T }> => {
    const fetchRequest = () => fetch(url, {method: HTTP_GET});
    const response = await retry(fetchRequest, RETRY_COUNT, RETRY_DELAY)
    return await handleResponse(response);
}

// necesito declarar una political de retry para la función fetch
const retry = (fn: any, retriesLeft: number, interval: number): Promise<Response> => {
    return new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch((error: any) => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        reject('maximum retries exceeded');
                        console.error(`Maximum retries exceeded, error: ${error}`)
                        return;
                    }

                    // Passing on "reject" is the important part
                    retry(fn, retriesLeft - 1, interval).then(resolve, reject);
                }, interval);
            });
    });
};