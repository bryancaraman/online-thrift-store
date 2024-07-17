

import { Card, Button, CardContent, CardMedia, CardActions, Typography, CardHeader,TextField,Stack } from '@mui/material';
import Link from 'next/link'; 
import {useForm} from "react-hook-form"

const Selling = () => {
    const {register,HandleSubmit} = useForm()
    const handleFormSubmit = (formData ) => {
        console.log("form data is ", formData)
    }

    return (
        <div>
        <h1> sell your clothes here  </h1>
        <form noValidate>
            <Stack spacing = {2} width = {400}>
            <TextField label = "Name" type = "Name"/>
            <TextField label = "description " type = "description"/>
            <TextField label = "size" type = "size"/>
            <TextField label = "color" type = "color_pick"/>
            <TextField label = "condition" type = "condition"/>
            <TextField label = "material" type = "material"/>
            <TextField label = "image_url" type = "image_url"/>
            <TextField label = "is_on_sale" type = "is_on_sale"/>
            <TextField label = "sale_price" type = "sale_price"/>
            {/* <Button type = "submit" varient = "contained" color = "primary">submit </Button> */}
            </Stack>
        </form>








                <Link href="/" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: -200, left:0,backgroundColor: '#6e3c19'}}>
                                back to home </Button>
                </Link>


        </div>
    );
};

export default Selling;