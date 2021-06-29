/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';

import ShoppingGrid from '../components/ShoppingGrid';
import { Container, Typography } from '@material-ui/core'

export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div style={{padding: "20px"}}>
      <Typography variant="h3">My Store</Typography>   
    </div>
    <ShoppingGrid />
  </Container>
);

export default ShopPage;
