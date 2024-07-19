import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import ShopItem from "./ShopItem";

function ShopItemList() {
    const PRODUCTS_URL = "http://localhost:8000/v1/products";
    const ADD_TO_CART_URL = "http://localhost:8000/v1/cartitems";

    // this is the state we will use to hold the response from the api
    const [products, setProducts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        /* fetch list of products here */
        /* update product state with response */
        const fetchProducts = async () => {
            const response = await fetch(PRODUCTS_URL, { method: 'GET'});
            const json = await response.json();
            setProducts(json);
        };

        fetchProducts();
    }, []);

    const handleAddToCart = async (product) => {
        if (product.sale_price !== undefined) {
            product.price = product.sale_price;
        }
        /* fetch current cart items */
        const response = await fetch(ADD_TO_CART_URL, { method: 'GET'});
        const cartItems = await response.json();
    
        const existingCartItem = cartItems.find(item => (item.product_id === product.product_id));

        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
            const body = JSON.stringify(updatedItem);
            await fetch(ADD_TO_CART_URL, { method: 'PATCH', body, headers: { 'content-type': 'application/json' }});
        } 
        else {
            const body = JSON.stringify({ ...product, quantity: 1 });
            await fetch(ADD_TO_CART_URL, { method: 'POST', body, headers: { 'content-type': 'application/json' }});
        }
        router.push('/cart');
    }
    

    return (
        <Grid container direction="row" spacing={1}>
            {products.map(product =>
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ShopItem
                        product_id={product.id}
                        name={product.name}
                        description={product.description}
                        image_url={product.image_url}
                        price={product.price}
                        is_on_sale={product.is_on_sale}
                        sale_price={product.sale_price}
                        onAddToCart={handleAddToCart}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default ShopItemList;