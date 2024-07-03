import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import CartItem from "./CartItem";

function CartItemList() {
    
    const CART_URL = "http://localhost:8000/v1/cartitems"

    // this is the state we will use to hold the response from the api
    const [items, setItems] = useState({});
    const router = useRouter()

    useEffect(async () => {
        /* fetch list of products here */
        /* update product state with response */
        const response = await fetch(CART_URL, { method: 'GET'});
        const json = await response.json();
        setItems(json);
    }, [])
    let count = 0
    return (
        /* Add your ShoppingItem components here! */
        /* How should you iterate over the list of products?  */
        /* Hint: map() function for Arrays */

        <Grid container direction="row" spacing={1}>
            {Object.values(items).map(item => 
                <Grid item xs>
                    <CartItem
                        key={item.id}
                        product_id={item.id}
                        name={item.name}
                        description={item.description}
                        image_url={item.image_url}
                        price={item.price}
                        is_on_sale={item.is_on_sale}
                        sale_price={item.sale_price}
                        quantity={item.quantity}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default CartItemList;
