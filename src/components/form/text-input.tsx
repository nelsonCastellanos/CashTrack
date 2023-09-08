import React from "react";
import {FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextField} from "@mui/material";

interface TextInputProps {
    label: string;
    props?: StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps;
    value?: string;
    onChange?: (value: string) => void;
}

export function TextInput(props: TextInputProps) {
    const [textValue, setTextValue] = React.useState<string>(props.value || "");

    function setHandlerValue(event: { target: { value: string; }; }) {
        const value = event.target.value;
        props.onChange && props.onChange(value);
        setTextValue(value);
    }

    return (
        <TextField label={props.label} fullWidth value={textValue} onChange={setHandlerValue} {...props.props}/>
    )
}