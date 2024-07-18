/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Selling from '../components/MUIform';
import '@fontsource/libre-baskerville';
import Link from '@mui/material';


export const sellingPage = () => (
  
  <container className="sell-page">
    <Head title='Sell'/>
    <div>
      <Selling/>
    </div>
  </container>
);

export default sellingPage