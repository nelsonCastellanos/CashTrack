"use client";

import Grid from "@mui/system/Unstable_Grid";
import {TextInput} from "@/components/form/text-input";
import IdentifyType from "@/components/application/identify-type";
import {TextAreaInput} from "@/components/form/text-area-input";
import {MoneyInput} from "@/components/form/money-input";
import DateInput from "@/components/form/date-input";
import {ExpenseCategory} from "@/components/application/category";
import InputFileUpload from "@/components/form/file-upload";
import {Product} from "@/components/application/product/product";
import BasicTable from "@/components/application/basic-table";
import React from "react";

export default function Home() {
    return (
        <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            <Grid xs={12}>
                <h1>Crear gasto</h1>
            </Grid>
            <Grid xs={12} md={6}>
                <TextInput label={"Número de identificación"}/>
            </Grid>
            <Grid xs={12} md={6}>
                <IdentifyType/>
            </Grid>
            <Grid xs={12} md={6}>
                <TextAreaInput placeholder={"Descripción"}/>
            </Grid>
            <Grid xs={12} md={6}>
                <MoneyInput label={"Monto"}/>
            </Grid>
            <Grid xs={12} md={6}>
                <DateInput/>
            </Grid>
            <Grid xs={12} md={6}>
                <ExpenseCategory/>
            </Grid>
            <Grid xs={12} sx={{p: 5, m: 2, border: '1px solid #434a53;'}} justifyContent="center" alignItems="center">
                <InputFileUpload/>
            </Grid>


            <Grid xs={12} md={12}>
                <Product/>
            </Grid>
            <Grid xs={12} md={12}>
                <BasicTable/>
            </Grid>
        </Grid>
    )
}