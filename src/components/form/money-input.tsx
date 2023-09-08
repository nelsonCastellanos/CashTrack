import React from "react";
import {NumericFormat, NumericFormatProps} from 'react-number-format';
import TextField from '@mui/material/TextField';

interface MoneyInputProps {
    label: string;
    onChange?: (value: number) => void;
    value?: number;
}

interface NumberOnChange {
    target: {
        name: string;
        value: string;
        floatValue: number | undefined
    }
}

interface CustomProps {
    onChange: (event: NumberOnChange) => void;
    name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                            floatValue: values.floatValue
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
        const formatEvent = event as unknown as NumberOnChange;
        props.onChange && props.onChange(formatEvent.target.floatValue || 0);
    };

    return (
        <TextField
            label={props.label}
            onChange={handleChange}
            InputProps={{
                inputComponent: NumericFormatCustom as any,
                defaultValue: props.value
            }}
            fullWidth
        />
    )
}