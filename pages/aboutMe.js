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



    <h1> <center>Welcome to our team</center> </h1>

    <Typography variant="body1" color="green" align="center" font=" ">We are a dynamic team of intern boot campers at GoDaddy, driven by our passion for sustainable solutions. Tasked with applying our training in APIs, Python, HTML, and CSS, and more we have crafted a captivating storefront and seamless shopping cart experience. 
Inspired by GoDaddy's commitment to sustainability, we take pride in creating a website that resonate with our values and yours. Explore our site and join us in 
embracing a more sustainable future through thoughtful consumption!</Typography>
<AMphotos/>
  </div>
  </container>
);

export default aboutMePage