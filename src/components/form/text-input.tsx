import React from "react";
import {FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps,
    TextField,
    TextFieldVariants
} from "@mui/material";

export function TextInput(props: { label: string, propsTextFields?: any, value?: string, getValue?: any }) {
    const [textValue, setTextValue] = React.useState<string>(props.value || "");

    function setHandlerValue(event: { target: { value: string; }; }) {
        const value = event.target.value;
        props.getValue && props.getValue(value);
        setTextValue(value);
    }

    return (
        <TextField label={props.label} fullWidth value={textValue} onChange={setHandlerValue} {...props.propsTextFields}/>
    )
}