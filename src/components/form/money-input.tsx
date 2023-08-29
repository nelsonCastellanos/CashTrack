import React from "react";
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import TextField from '@mui/material/TextField';

interface MoneyInputProps {
    label: string;
}

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values: { value: any; }) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator={'.'}
                decimalSeparator={','}
                valueIsNumericString
                prefix="$"
            />
        );
    },
);

export function MoneyInput(props: MoneyInputProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    };

    return (
        <TextField
            label={props.label}
            onChange={handleChange}
            InputProps={{
                inputComponent: NumericFormatCustom as any,
            }}
            fullWidth
        />
    )
}