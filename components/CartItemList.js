import React, { useState, useEffect } from "react";
import { Grid, CardContent, Typography, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, TextField } from '@mui/material';
import { useRouter } from 'next/router'
import CartItem from "./CartItem";


function CartItemList() {
    const CART_URL = "http://localhost:8000/v1/cartitems"

    // this is the state we will use to hold the response from the api
    const [items, setItems] = useState([]);

    const total = items
        .map(item => item.quantity * item.price)
        .reduce((nextValue, total) => nextValue + total, 0);
    const tax = Number((total * .08625).toFixed(2));
    const shippingAndHandling = total > 25 ? 0 : 4.99;
    const total_price = total + tax + shippingAndHandling;

    useEffect(async () => {
        /* fetch list of products here */
        /* update product state with response */
        const response = await fetch(CART_URL, { method: 'GET' });
        const json = await response.json();
        setItems(json);
    }, [])

    function deleteItem(product_id) {
        fetch(`${CART_URL}/${product_id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    if (items.length > 0) {
                        const updatedItems = items.filter(item => item.id != product_id);
                        setItems({ items: updatedItems })
                    }
                }
                else {
                    alert('Delete failed:', response.status)
                }
            });
    }

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const [paymentMethod, setPaymentMethod] = useState('cash_app');

    const renderPaymentDetails = () => {
        switch (paymentMethod) {
            case 'cash_app':
                return (<Button variant="contained" color="primary" startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/2048px-Square_Cash_app_logo.svg.png" alt="Cash App Logo" width="20" height="20" />}>Cash App </Button>);
            case 'apple_pay':
                return <Button variant="contained" color="primary" startIcon={<img src="https://static-00.iconduck.com/assets.00/apple-square-icon-2048x2048-hyhid1wx.png" alt="Apple Pay Logo" width="20" height="20" />} >Apple Pay</Button>;
            case 'credit_card':
                return (
                    <>
                        <TextField label="Card Number" variant="outlined" fullWidth />
                        <TextField label="MM/YY" variant="outlined" sx={{ width: '50%' }} />
                        <TextField label="CVC" variant="outlined" sx={{ width: '50%' }} />
                        <FormControl>
                            <FormLabel component="legend">Billing Address</FormLabel>
                            <TextField label="Street Address" variant="outlined" fullWidth />
                            <TextField label="City, State ZIP" variant="outlined" fullWidth />
                        </FormControl>
                        <FormControlLabel control={<Checkbox />} label="Billing address is same as shipping" />
                        <div style={{ marginTop: '10px' }}> </div>
                        <Button variant="contained" color="primary"> Submit </Button>

                    </>
                );
            default:
                return null;
        }
    };


    return (
        <div className="container">
            <div className="left-side">
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
                </Grid>
            </div>
            <div className="right-side">
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p>+ Subtotal: $ {total.toFixed(2)}</p>
                    <p>+ Tax: $ {tax} </p>
                    <p>+ Shipping & Handling: $ {shippingAndHandling} </p>
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "1rem" }}>
                        + Total: $ {total_price.toFixed(2)}
                    </p>
                    {/* <button className="btn">Pay</button> Pt:2 -> Would want to click this and the below show */}

                </div>
                <div className="payment">
                    <CardContent>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Payment Method</FormLabel>
                            <RadioGroup row={false} aria-label="payment" name="payment" value={paymentMethod} onChange={handlePaymentMethodChange}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Radio value="cash_app" />
                                    <Typography variant="body2" style={{ marginLeft: '5px' }}>Cash App</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Radio value="apple_pay" />
                                    <Typography variant="body2" style={{ marginLeft: '5px' }}>Apple Pay</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Radio value="credit_card" />
                                    <Typography variant="body2" style={{ marginLeft: '5px' }}>Credit/Debit Card</Typography>
                                </div>
                            </RadioGroup>
                        </FormControl>

                        {renderPaymentDetails()}

                    </CardContent>
                </div>
                &copy; 2024 Second Chance Styles
            </div>
        </div>
    );
}


export default CartItemList;
