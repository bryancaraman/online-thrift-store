import React from "react";
import { Card, Button, CardContent, CardMedia, CardActions, Typography } from '@mui/material';

const images = [
  "https://imgur.com/a/ulLyZCo",
  "https://imgur.com/a/ulLyZCo",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/4626b5ac-8ac0-4e88-ae38-dd94cb12a89d/Product-grid-Email.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/c8d98599-46cc-412d-bbb5-d766bb0e5a05/Product-grid-SSL.jpg",
  "https://img1.wsimg.com/cdn/Image/All/AllChannelsFoS/1/en-US/8f679b96-df22-41fc-afd8-854d47a1c634/Product-grid-Hosting.jpg",
  "https://img1.wsimg.com/cdn/Image/All/FOS-Intl/1/en-US/3b91b99f-57eb-44bd-b2e1-1cfd6529bbfb/feat-ols-your-store-your-way.jpg?impolicy=cms-feature-module"
]

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
        <Card style={{height: "400px"}}>
            <CardMedia
                sx={{ height: "150px"}}
                image={images[product_id]}
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