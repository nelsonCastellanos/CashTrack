import AutocompleteInput from "@/components/form/autocomplete-input";
import Grid from "@mui/system/Unstable_Grid";
import AddIcon from '@mui/icons-material/Add';
import BasicModal from "@/components/form/basic-modal";
import Create from './expense-create';
import * as React from "react";
import {useEffect, useState} from "react";
import SelectInput from "@/components/form/select-input";

export default function ExpenseCategory() {
    const [data, setData] = useState<Array<{
        label:string, id:string, name:string, description:string }>>([])
    const [isLoading, setLoading] = useState(true)
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        reloadData();
    }, [])

    const reloadData = () => {
        fetch('/api/category')
            .then((res) => res.json())
            .then((data: {id:string, name:string, description:string }[]) => {
                const types = data.map(item => ({
                    label: item.name,
                    ...item,
                }))
                setData(types);
                setLoading(false)
            })
    }

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    function handlerCreated(arg0: any): void {
        setOpen(false);
        reloadData();
    }

    function handlerModal(open: boolean): void {
        console.log(open)
        setOpen(open);
    }

    return (
        <Grid container  columnSpacing={1}>
            <Grid xs={10}>
                <AutocompleteInput label={"Categoría"}  options={data} />
            </Grid>
            <Grid xs={1} justifyContent="center">
                <BasicModal button={<AddIcon />} open={open} changeStatus={handlerModal}>
                    <Create onCreated={handlerCreated} />
                </BasicModal>
            </Grid>
        </Grid>
    )
}