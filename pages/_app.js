import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '@src/themes/theme';
import createEmotionCache from '@src/createEmotionCache';
import Dashboard from '@components/dashboard/App';
import NProgress from '@components/NProgress';
import { shouldUseDashboardTemplate } from '@utils/routes';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter()

  const _renderPage = (_page) => (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Optokinetic</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NProgress showSpinner={false} />
          {_page}
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  )

  if (shouldUseDashboardTemplate(router.pathname)) {
    return _renderPage(
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    )
  } else {
    console.log(`Can't use dashboard template for route: ${router.pathname}`);
  }

  return _renderPage(<Component {...pageProps} />);
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

/**
 * Boilerplate
 * What this does is that if any of the pages has `getInitialProps`
 * on them, then we are going to wait for it to completely execute or
 * usually what for the data fetching to complete
 */
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
}

export default MyApp