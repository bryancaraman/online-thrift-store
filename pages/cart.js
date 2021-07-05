/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Cart from '../components/Cart'
import { Container, Typography } from '@material-ui/core'

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <div>
      <Typography variant="h3">
        My Cart
      </Typography>
    </div>
    <div style={{"padding-bottom": "20px"}}>
      <Link href="/shop">
        <a>Back to shop</a>
      </Link>
    </div>
    <Cart />
  </Container>
);

export default CartPage;
