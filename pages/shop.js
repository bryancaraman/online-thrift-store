/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

import ShopItemList from '../components/ShopItemList';
import { Container, Typography } from '@mui/material'

export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div style={{"padding-bottom": "10px"}}>
      <Typography variant="h3">My Store</Typography>   
    </div>
    <div style={{"padding-bottom": "20px"}}>
      <Link href="/cart">View cart</Link>
    </div>
    <ShopItemList />
  </Container>
);

export default ShopPage;