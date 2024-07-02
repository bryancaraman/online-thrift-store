/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { DocumentHeadTags, documentGetIniitialProps }from '@mui/material-nextjs/v13-pagesRouter';

export const IndexPage = (props) => (
  <div>
    <Head title='Home'/>
    <h1>Welcome!</h1>
  </div>
);

export default IndexPage