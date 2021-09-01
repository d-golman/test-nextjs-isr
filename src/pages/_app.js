import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import theme from '../theme';
import Link from "next/link"
import { Typography } from '@material-ui/core';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <AppBar position="fixed">
          <Toolbar variant="dense">
          <Typography variant="h6"><Link href="/"><a style={{color:"white"}} >Microphone Shop</a></Link></Typography>
          </Toolbar>
        </AppBar>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Container>
            <Box marginTop={8}>
              <Component {...pageProps} />
            </Box>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
