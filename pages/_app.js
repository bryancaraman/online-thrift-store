import React from 'react';
import PropTypes from 'prop-types';
const { nextRedux } = require('../redux/store');
import '../styles.css'

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
