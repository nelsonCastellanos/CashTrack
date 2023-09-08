import {CircularProgress} from "@mui/material";
import {green} from "@mui/material/colors";

export const ProgressBar = (props: any) => (
    <CircularProgress
        size={68}
        sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
        }}
    />
)
