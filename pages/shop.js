/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import ShopItemList from '../components/ShopItemList';

import { Container, Typography } from '@mui/material'

export const ShopPage = (props) => (
    <Container>
        <div>
            <Head title='Home'/>
            <div>
                <Typography variant="h3">My Shop</Typography>  
                <Link href="/cart">View cart</Link> 
                <ShopItemList/>
            </div>
        </div>
    </Container>
);

export default ShopPage