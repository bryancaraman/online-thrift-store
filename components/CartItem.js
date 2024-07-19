import React from "react";
import { Card, CardContent, CardActions, Button, CardMedia, Typography } from '@mui/material';

function CartItem({ product_id, name, image_url, price, quantity, onRemoveFromCart }) {

    const removeFromCart = () => {
        onRemoveFromCart(product_id)
    }

    return (
        <Card style={{height: "500px"}}>
            <CardMedia
                sx={{ height: "290px", width:"90%"}}
                image={image_url}
                align="center"
                title={name}
            />
            <CardContent>
                <Typography variant="h5"> {name} </Typography>
                <Typography variant= "h6">Quantity: {quantity}</Typography>
                <Typography variant="h6">Price: ${price}</Typography>
            </CardContent>
            <CardActions>
                <Button className='caroButton' onClick={removeFromCart} color="primary">Remove from cart</Button>
            </CardActions>
        </Card>
    );
}

export default CartItem;
