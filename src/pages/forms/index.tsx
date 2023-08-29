// create react basic component

import InputFileUpload from "@/components/form/file-upload";
import {TextInput} from "@/components/form/text-input";
import React from "react";
import Grid from "@mui/system/Unstable_Grid";
import IdentifyType from "@/components/application/identify-type";
import {TextAreaInput} from "@/components/form/text-area-input";
import {MoneyInput} from "@/components/form/money-input";
import DateInput from "@/components/form/date-input";
import {ExpenseCategory} from "@/components/application/category";
export default function Forms() {

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12} >
                <h1>Crear gasto</h1>
            </Grid>
            <Grid xs={12} md={6}>
                <InputFileUpload/>
            </Grid>
            <Grid xs={12} md={6}>
                <TextInput label={"Número de identificación"}/>
            </Grid>
            <Grid xs={12} md={6}>
                <IdentifyType  />
            </Grid>
            <Grid xs={12} md={6}>
                <TextAreaInput placeholder={"Descripción"} />
            </Grid>
            <Grid xs={12} md={6}>
                <MoneyInput label={"Monto"}/>
            </Grid>
            <Grid xs={12} md={6}>
                <DateInput />
            </Grid>
            <Grid xs={12} md={6}>
                <ExpenseCategory />
            </Grid>
        </Grid>
    )
}