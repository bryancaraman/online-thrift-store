import React from "react";
import { Card, Button, CardContent, CardMedia, CardActions, Typography, Container } from '@mui/material';

function ShopItem({ product_id, name, description, image_url, price, is_on_sale, sale_price, onAddToCart}) {
    const addToCart = () => {
        if (is_on_sale) {
            console.log('Adding on sale product:', { product_id, name, image_url, sale_price, quantity: 1 });
            onAddToCart({ product_id, name, image_url, sale_price, quantity: 1 })
        }
        else {
            onAddToCart({ product_id, name, image_url, price, quantity: 1 })
        }
    }

    const checkOnSale = () => {
        if (is_on_sale) {
            return (
                <div>
                    <Typography style={{ textDecoration: 'line-through' }}>Original price: {price}</Typography>
                    <Typography variant="h6" style={{color:"#FF0000"}}>Sale price: {sale_price}</Typography>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Typography variant="h6">Price: {price}</Typography>
                </div>
            );
        }
    }

    return (
        <div className="shop-item">
        <Card style={{height: "500px"}}>
            <CardMedia
                sx={{ height: "290px"}}
                image={image_url}
                title={name}
            />
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="h7">{description}</Typography>
                <Typography variant="h6">{checkOnSale()}</Typography>
            </CardContent>
        </Card>
        <Container>
                <Button className="flex-button" variant="text" color="primary" onClick={addToCart}>Add To Cart</Button>
        </Container>
        </div>
    );
}

export default ShopItem;