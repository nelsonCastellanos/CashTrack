import AutocompleteInput from "@/components/form/autocomplete-input";
import Grid from "@mui/system/Unstable_Grid";
import AddIcon from '@mui/icons-material/Add';
import BasicModal from "@/components/form/basic-modal";
import Create from './expense-create';
import * as React from "react";
import {useEffect, useState} from "react";
import {ProgressBar} from "@/components/form/progress-bar";
import {GET} from "@/utils/request";
import {SERVICES_PATH} from "@/constants/http-request";

export default function ExpenseCategory() {
    const [data, setData] = useState<Array<{
        label: string, id: string, name: string, description: string
    }>>([])
    const [isLoading, setLoading] = useState(true)
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        reloadData()
    }, [])

    const reloadData = () => {
        GET<{ id: string, name: string, description: string }[]>(SERVICES_PATH.CATEGORY.GET).then(
            (response) => {
                if (response.code === 200) {
                    const types = response.message.map(item => ({
                        label: item.name,
                        ...item,
                    }))
                    setData(types);
                    setLoading(false);
                }
            }
        );
    }

    if (isLoading) return <ProgressBar/>
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
        <Grid container columnSpacing={1}>
            <Grid xs={10}>
                <AutocompleteInput label={"Categoría"} options={data}/>
            </Grid>
            <Grid xs={1} justifyContent="center">
                <BasicModal button={<AddIcon/>} open={open} changeStatus={handlerModal}>
                    <Create onCreated={handlerCreated}/>
                </BasicModal>
            </Grid>
        </Grid>
    )
}