import {ViewfinderCircleIcon} from "@heroicons/react/24/solid";

export const FileUpload = () => {
    return (
        <div className="text-center">
            <ViewfinderCircleIcon className="mx-auto h-12 w-12 "/>
            <div className="mt-4 flex text-sm leading-6 ">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                </label>
                <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 ">PNG, PDF</p>
        </div>
    )
}