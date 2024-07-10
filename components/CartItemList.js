import React, { useState, useEffect } from "react";
import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import CartItem from "./CartItem";

function CartItemList() {
    const CART_URL = "http://localhost:8000/v1/cartitems"

    // this is the state we will use to hold the response from the api
    const [items, setItems] = useState([]);
    const router = useRouter()

    const total = items
    .map(item => item.quantity * item.price)
    .reduce((nextValue, total) => nextValue + total, 0)

    useEffect(async () => {
        /* fetch list of products here */
        /* update product state with response */
        const response = await fetch(CART_URL, { method: 'GET'});
        const json = await response.json();
        setItems(json);
    }, [])

    function deleteItem(product_id) {
        fetch(`${CART_URL}/${product_id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                if (items.length > 0) {
                    const updatedItems = items.filter(item => item.id != product_id);
                    this.setState({ items: updatedItems })
                }
            }
            else {
                alert('Delete failed:', response.status)
            }
        });
    }

    return (
        /* Add your ShoppingItem components here! */
        /* How should you iterate over the list of products?  */
        /* Hint: map() function for Arrays */

        <Grid container direction="row" spacing={1}>
            {items.map(item => 
                <Grid item xs>
                    <CartItem
                        key={item.id}
                        product_id={item.id}
                        name={item.name}
                        image_url={item.image_url}
                        price={item.price}
                        quantity={item.quantity}
                        onRemoveFromCart={deleteItem}
                    />
                </Grid>
            )}
            <div>
                <Typography variant="h4">Total: ${total}</Typography>
            </div>
        </Grid>


    )
}

export default CartItemList;
