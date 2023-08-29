import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";

export default function AutocompleteInput (props: { label: string; options: Array<{ label: string }>}) {
    return (
        <Autocomplete
            fullWidth
            options={props.options}
            renderInput={(params) => <TextField {...params} label={props.label} />}
        />
    );
}