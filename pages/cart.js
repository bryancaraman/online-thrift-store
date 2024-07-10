import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import CartItemList from '../components/CartItemList';

import { Container, Typography, Box } from '@mui/material'


export const CartPage = (props) => (
    <Container>
      <div>
        <Head title='Cart' />
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 3 
          }}
        >
          <Typography variant="h3" sx={{ fontFamily: 'Gill Sans' }}>
            My Cart
          </Typography>
          <Link href="/shop" passHref>
            <Typography 
              component="a" 
              sx={{ 
                fontFamily: 'Gill Sans',
                textDecoration: 'none',
                color: 'primary.main',
              }}
            >
              Shop
            </Typography>
          </Link>
        </Box>
        <CartItemList />
      </div>
    </Container>
  );
  
  export default CartPage;
  