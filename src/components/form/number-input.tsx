import React from "react";
import {TextField} from "@mui/material";

export function NumberInput(props: { label: string, props?: any, value?: number, onChange?: any }) {
    const [textValue, setTextValue] = React.useState<number>(props.value || 0);

    function setHandlerValue(event: { target: { value: number; }; }) {
        const value = event.target.value;
        props.onChange && props.onChange(value);
        setTextValue(value);
    }

    return (
        <TextField
            label={props.label}
            type={"number"}
            fullWidth
            value={textValue}
            onChange={setHandlerValue}
            {...props.props}
        />
    )
}