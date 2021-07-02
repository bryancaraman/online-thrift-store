/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

import ShoppingGrid from '../components/ShoppingGrid';
import { Container, Typography } from '@material-ui/core'

export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div style={{"padding-bottom": "10px"}}>
      <Typography variant="h3">My Store</Typography>   
    </div>
    <div style={{"padding-bottom": "20px"}}>
      <Link href="/cart">
        <a>View cart</a>
      </Link>
    </div>
    <ShoppingGrid />
  </Container>
);

export default ShopPage;
