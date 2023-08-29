import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';


export default function DateInput() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs(new Date())} sx={
                {
                    width: "100%"
                }
            } />
        </LocalizationProvider>
    );
}