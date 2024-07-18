import React from "react";
import { Card, Button, CardContent, CardMedia, CardActions, Typography } from '@mui/material';

function ShopItem({ product_id, name, description, image_url, price, is_on_sale, sale_price, onAddToCart}) {
    const addToCart = () => {
        if (is_on_sale) {
            onAddToCart({ product_id, name, image_url, sale_price, quantity: 1 })
        }
        else {
            onAddToCart({ product_id, name, image_url, price, quantity: 1 })
        }
    }

    return (
        <Card style={{height: "500px"}}>
            <CardMedia
                sx={{ height: "290px"}}
                image={image_url}
                title={name}
            />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="h8">{description}</Typography>
                <Typography variant="h6">Price: ${price}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" color="primary" onClick={addToCart}>Add To Cart</Button>
            </CardActions>
        </Card>
    );
}

export default ShopItem;