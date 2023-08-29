import {Button} from "@mui/material";

export default function InputFileUpload() {
    return (
       <>
           <input
               accept="image/*"
               style={{ display: 'none' }}
               id="raised-button-file"
               multiple
               type="file"
           />
           <label htmlFor="raised-button-file">
               <Button variant="contained" component="span">
                   Upload
               </Button>
           </label>
       </>
    );
}
