/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@mui/material'
import AMphotos from '../components/AboutMePhotos';
import '@fontsource/libre-baskerville';
import Link from '@mui/material';


export const aboutMePage = () => (
  <container>
        <Head title='About us'/>
  <div>
    <AMphotos/>
  </div>
  </container>
);

export default aboutMePage