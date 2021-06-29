/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { Container, Typography } from '@material-ui/core'

export const IndexPage = () => (
  <Container>
    <Head title='Home'/>
    <div style={{padding: "20px"}}>
      <Typography variant="h3">
        Insert Cart Page Here
      </Typography>   
    </div>
  </Container>
);

export default IndexPage;
