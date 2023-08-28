export const InputText = (props: {
    title: string;
    autoComplete: string;
}) => {
    return (
        <div className="col-span-full">
            <label htmlFor="identification" className="block text-sm font-medium leading-6 ">
                {props.title}
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    name="identification"
                    id="identification"
                    autoComplete={props.autoComplete}
                    className="block w-full rounded-md border-0 py-1.5 bg-gray-800 "
                />
            </div>
        </div>
    );
}