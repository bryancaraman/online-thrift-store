/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import Selling from '../components/MUIform';
import '@fontsource/libre-baskerville';
import Link from '@mui/material';


export const sellingPage = () => (
  <container>
        <Head title='Sell'/>
  <div>

    <h1> <center>Sell your clothes here! </center> </h1>

    <Typography variant="body1" color="green" align="center" font=" "> please enter the details of your clothes so we can get them sold </Typography>
    <Selling/>
  </div>
  </container>
);

export default sellingPage