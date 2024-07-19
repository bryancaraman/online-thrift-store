/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Selling from '../components/MUIform';
import '@fontsource/libre-baskerville';
import Link from '@mui/material';


export const sellingPage = () => (
  <div>
    <Head title='Sell'/>
    <Selling/>
  </div>
);

export default sellingPage