import React from "react";
import Button from "@mui/material/Button";

export function ActionButton(props: { label: string, props?: any }) {

    return (
        <Button {...props.props} variant={"contained"}>{props.label}</Button>
    )
}