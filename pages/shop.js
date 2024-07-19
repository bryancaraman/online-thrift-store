/* eslint-disable no-unused-vars */

/* brown: #6E3C19 */
/* moss green: #8A9A5B */
/* white beige: #F2EBE2 */

import React, { useState } from 'react';
import Head from '../components/head';
import Link from 'next/link';
import { Container, Typography, Box, Grid, IconButton, InputBase, List, ListItem, ListItemText, ListItemIcon, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FavoriteBorder, PersonOutline, ShoppingCart } from '@mui/icons-material';
import ShopItemList from '../components/ShopItemList'

const ShopPage = () => {
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [condition, setCondition] = useState('');
  const [material, setMaterial] = useState('');
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };
  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };
  return (
    <div>
      <Head title='Welcome to the Shop!' />
      
      {/* Search Bar */}
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

      <Container maxWidth='xl'>
      
      {/* Filters and Product Grid */}
      <Box display="flex" mt={5}>
        {/* Filters */}
        <Box width="200px" pr={4.5}>
          <Typography padding={1} >Filters:</Typography>
 <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Size</InputLabel>
            <Select value={size} onChange={handleSizeChange} label="Size">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleCategoryChange} label="Category">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="accessories">Accessories</MenuItem>
              <MenuItem value="footwear">Footwear</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Color</InputLabel>
            <Select value={color} onChange={handleColorChange} label="Color">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="green">Green</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Condition</InputLabel>
            <Select value={condition} onChange={handleConditionChange} label="Condition">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="new">New</MenuItem>
              <MenuItem value="used">Used</MenuItem>
              <MenuItem value="refurbished">Refurbished</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Material</InputLabel>
            <Select value={material} onChange={handleMaterialChange} label="Material">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="cotton">Cotton</MenuItem>
              <MenuItem value="leather">Leather</MenuItem>
              <MenuItem value="wool">Wool</MenuItem>
            </Select>
          </FormControl>
        </Box>
       
       {/* Product Grid */}
       <ShopItemList/>
        
      </Box>
      </Container>
    </div>
  );
};

export default ShopPage;
