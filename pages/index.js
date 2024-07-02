/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import { DocumentHeadTags, documentGetIniitialProps }from '@mui/material-nextjs/v13-pagesRouter';

export const IndexPage = (props) => (
  <div>
    <Head title='Home'>
      <DocumentHeadTags {...props} />
    </Head>
    <h1>Welcome!</h1>
  </div>
);

IndexPage.getInitialProps = async (ctx) => {

}


export default IndexPage