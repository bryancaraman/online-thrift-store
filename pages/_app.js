import React from 'react';
import PropTypes from 'prop-types';
const { nextRedux } = require('../redux/store');
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import '../styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'

function WrappedApp({ Component, pageProps }) {
  return <Component { ...pageProps } />;
}

WrappedApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
};

export default [
  nextRedux.withRedux,
].reduce((cmp, hoc) => hoc(cmp), WrappedApp);
