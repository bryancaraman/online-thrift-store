/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import aboutMePage from './aboutMe';
import Link from 'next/link';
import { Button } from '@mui/material';

export const IndexPage = (props) => (
  <div>
    <Head title='Home'/>
    <h1>Welcome</h1>
    <Link href="/aboutMe">
    <Button
    variant="contained"
    color="primary"
    style={{ position: 'absolute', top: 10, right: 10,backgroundColor: '#6e3c19'}}> aboutme</Button></Link>
  </div>
);

export default IndexPage