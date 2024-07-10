import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import ShopItem from "./ShopItem";

function ShopItemList() {
    const PRODUCTS_URL = "http://localhost:8000/v1/products"
    const ADD_TO_CART_URL = "http://localhost:8000/v1/cartitems"

    // this is the state we will use to hold the response from the api
    const [products, setProducts] = useState([]);
    const router = useRouter()

    useEffect(async () => {
        /* fetch list of products here */
        /* update product state with response */
        const response = await fetch(PRODUCTS_URL, { method: 'GET'});
        const json = await response.json();
        setProducts(json)
    }, [])

    const handleAddToCart = async (product) => {
        const body = JSON.stringify(product);
        const response = await fetch(ADD_TO_CART_URL, { method: 'POST', body, headers: { 'content-type': 'application/json' }});
        router.push("/cart")
      }
    

      return (
        <Grid container spacing={3} sx={{ padding: 2 }}>
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