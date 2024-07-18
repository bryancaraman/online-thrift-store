/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import Head from '../components/head';
import aboutMePage from './aboutMe';
import Link from 'next/link';
import Carousel from '../components/Carousel';
import { Container, Typography, Box, Grid, IconButton, InputBase, List, ListItem, ListItemText, ListItemIcon, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FavoriteBorder, PersonOutline, ShoppingCart } from '@mui/icons-material';

const images = [
    'clothes/sweater.jpg',
    'clothes/Tie.jpg',
    'clothes/dressShoes.jpg',
  ];


export const IndexPage = (props) => (
  <div className="HomePage">
      <Head title='Home'/>
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

      <main>
        <section id='Intro'>
          <div class='flex-container'>
          <img src="/secondChance.png" alt="Logo" style={{ height: '340px', padding: 50,}} />
            
            <p class='intro-part second'> Welcome to our college student-run thrift store! Discover an eclectic blend of pre-loved treasures 
              curated by our savvy team of students. From vintage fashion finds to quirky home decor and everything in between, each item tells a unique story waiting to continue with you. 
              Dive into sustainable shopping with style and support our community-driven mission. Happy hunting!
              </p>
          </div>
        </section>
        <section>
        <div className="HomePage">
      <h1 class='featured'>Featured Today!</h1>
      <Carousel images={images} />
    </div>
        </section>
        <section className="featured-items">
          <h2>Some items</h2>
          <div className="item-list">
            {/* Placeholder for featured items */}
            <div className="item-card">
              <img src="https://via.placeholder.com/150" alt="Item" />
              <h3>Item Name</h3>
              <p>Description of the item...</p>
              <button>Add to Cart</button>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150" alt="Item" />
              <h3>Item Name</h3>
              <p>Description of the item...</p>
              <button>Add to Cart</button>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150" alt="Item" />
              <h3>Item Name</h3>
              <p>Description of the item...</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 SecondChanceStyles. All rights reserved.</p>
      </footer>
    </div>
);

export default IndexPage