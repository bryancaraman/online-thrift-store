import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import CartItemList from '../components/CartItemList';

import { Container, Typography, Box, InputBase, IconButton } from '@mui/material'
import { FavoriteBorder, PersonOutline, ShoppingCart } from '@mui/icons-material';


export const CartPage = (props) => (
    <Container>
      <div>
        <Head title='Cart' />
        <header className='HomePage-header'>
          <Box display="flex" justifyContent="space-between" alignItems="center" py={1} borderBottom={1} borderColor="brown.500">
              <Box display="flex" alignItems="center">
                <Link legacyBehavior href="/">
                  <img src="/BrownLogo.png" alt="Logo" style={{ height: '50px' }} />
                </Link>
              </Box>
              <Box display="flex" alignItems="center">
                <Link legacyBehavior href="/aboutMe">
                    <a style={{ color: '#6E3C19', margin: '0 16px' }}>ABOUT US</a>
                </Link>
                <Link legacyBehavior href="/shop">
                  <a style={{ color: '#6E3C19', margin: '0 16px' }}>SHOP</a>
                </Link>
                <Link legacyBehavior href="/sell">
                  <a style={{ color: '#6E3C19', margin: '0 16px' }}>SELL</a>
                </Link>
              </Box>
            
            <Box display="flex" alignItems="center">
              <InputBase placeholder="Search" style={{ margin: '0 16px', border: '1px solid beige', padding: '4px' }} />
              <IconButton style={{ color: '#8A9A5B' }}><FavoriteBorder /></IconButton>
              <IconButton style={{ color: '#8A9A5B' }}><PersonOutline /></IconButton>
              <Link legacyBehavior href="/cart">
                <IconButton style={{ color: '#8A9A5B' }} ><ShoppingCart /></IconButton>
              </Link>
            </Box>
      
          </Box>
        </header>
        <CartItemList />
      </div>
    </Container>
  );
  
  export default CartPage;
  