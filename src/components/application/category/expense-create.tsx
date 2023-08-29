import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/system/Unstable_Grid";
import {TextInput} from "@/components/form/text-input";
import {TextAreaInput} from "@/components/form/text-area-input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Create(props: { onCreated: (arg0: any) => void; }){
    const [category, setCategory] = React.useState<{
        id: number;
        name: string;
        description: string;
    }>({id: 0,name: "",description: ""});


    function handlerSubmit(vent: { preventDefault: () => void; }) {
        // create fetch post in js
        fetch('/api/category', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        })
            .then(response => response.json())
            .then(data => {
                props.onCreated(data);
            });
        vent.preventDefault();
    }

    let handlerName = (value: string) => {
        setCategory({...category, name: value});
    };

    return (
        <Box component="form" action={"#"} onSubmit={handlerSubmit}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={12}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Crear Categoría
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <TextInput label={"Nombre"} propsTextFields={{required: true}} getValue={handlerName}/>
                </Grid>
                <Grid xs={12}>
                    <TextAreaInput placeholder={"Descripción"}/>
                </Grid>
                <Grid xs={12}>
                    <Button variant="contained" type="submit">Agregar</Button>
                </Grid>
            </Grid>
        </Box>
    )
}