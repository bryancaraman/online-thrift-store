/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import CartItemList from '../components/CartItemList';

import { Container, Typography, Style } from '@mui/material'


export const CartPage = (props) => (
  <Container>
      <div>
          <Head title='Home'/>
          <div>
              <Typography variant="h3" style={{ fontFamily: 'Gill Sans' }}>My Cart</Typography>   
              <CartItemList/>
          </div>
          <div>
              <Link href="/shop" style={{ fontFamily: 'Gill Sans' }}>Shop</Link>
          </div>
      </div>
  </Container>
);


export default CartPage