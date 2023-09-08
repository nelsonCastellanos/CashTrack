import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props: { children: React.ReactElement; button: React.ReactElement; open: boolean, changeStatus: any}) {
    const [open, setOpen] = React.useState(props.open);

    useEffect(() => {
        setOpen(props.open)
    }, [props.open]);

    const handleOpen = () => {
        setOpen(true)
        props.changeStatus(true)
    };
    const handleClose = () => {
        setOpen(false);
        props.changeStatus(false)
    }

    return (
        <>
            <Button onClick={handleOpen} variant={"outlined"}>
                {props.button}
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    {props.children}
                </Box>
            </Modal>
        </>
    );
}