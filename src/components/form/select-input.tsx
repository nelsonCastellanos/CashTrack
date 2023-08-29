import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";

export default function SelectInput(props: {
    value: string;
    label: string;
    options: any[]; }) {
    const [value, setValue] = React.useState(props.value);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
            <InputLabel>{props.label}</InputLabel>
            <Select
                value={value}
                label={props.label}
                onChange={handleChange}
            >
                {props.options.map(option => {
                    return (<MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>)
                })}
            </Select>
        </FormControl>
    )
}