import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import {TextInput} from "@/components/form/text-input";
import * as React from "react";
import {MoneyInput} from "@/components/form/money-input";
import {NumberInput} from "@/components/form/number-input";
import {ActionButton} from "@/components/form/action-button";
import {DEFAULT_AMOUNT} from "@/constants/numbers";

interface ProductProps {
    onCreate?: ({name, amount, quantity}: { name: string; amount: number; quantity: number; }) => void;
}

export const Product = (props: ProductProps) => {
    const [name, setName] = React.useState<string>("");
    const [amount, setAmount] = React.useState<number>(DEFAULT_AMOUNT);
    const [quantity, setQuantity] = React.useState<number>(1);

    function handlerSubmit(vent: { preventDefault: () => void; }) {
        console.log(`Formulario enviado con los datos ${name} ${amount} ${quantity}`);
        props.onCreate && props.onCreate({
            name,
            amount,
            quantity
        });
        vent.preventDefault();
    }

    return (
        <Box component="form" action={"#"} onSubmit={handlerSubmit}>
            <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid xs={12}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Productos
                    </Typography>
                </Grid>
                <Grid xs={12} md={6}>
                    <TextInput label={"Nombre"} props={{required: true}} value={name} onChange={setName}/>
                </Grid>
                <Grid xs={12} md={6}>
                    <MoneyInput label={"Monto"} onChange={setAmount} value={amount}/>
                </Grid>

                <Grid xs={12} md={6}>
                    <NumberInput label={"Cantidad"} value={quantity} props={{required: true}} onChange={setQuantity}/>
                </Grid>

                <Grid xs={12}>
                    <ActionButton label={
                        "Agregar producto"
                    } props={{type: "submit"}}/>
                </Grid>
            </Grid>
        </Box>
    )
}