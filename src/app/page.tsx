import {FileUpload} from "@/components/form/fileUpdload";

export default function Example() {
    return (
        <form>
            <div className="space-y-12 mt-8">
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-base font-semibold leading-7 ">Cash Track</h1>
                    <p className="mt-1 text-sm leading-6 ">
                        Ingresando su información hoy salva su futuro.
                    </p>

                    <div className="col-span-full">
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <FileUpload />
                        </div>
                    </div>


                </div>
            </div>
        </form>
    )
}
