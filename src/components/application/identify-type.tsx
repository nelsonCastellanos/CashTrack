import {useEffect, useState} from "react";
import SelectInput from "@/components/form/select-input";
import {ProgressBar} from "@/components/form/progress-bar";

export default function IdentifyType() {
    const [data, setData] = useState<Array<{
        label:string, value: string }>>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/identify-type')
            .then((res) => res.json())
            .then((data: {id:string, name:string }[]) => {
                const types = data.map(item => ({
                    label: item.name,
                    value: item.id
                }))
                setData(types);
                setLoading(false)
            })
    }, [])

    if (isLoading) return <ProgressBar/>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <SelectInput value={"1"} options={data} label={"Tipo de identificación"} />
        </div>
    )
}