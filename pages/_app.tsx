import 'styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import React, { ReactElement, useEffect } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { gaInit, logPageView } from 'lib/google-analytics';
import {
	ApolloProvider,
	NormalizedCacheObject,
	ApolloClient
} from '@apollo/client';
import { useApollo } from 'lib/apollo';
import whyDidYouRender from '@welldone-software/why-did-you-render';

config.autoAddCss = false;

// https://github.com/UnlyEd/next-right-now/blob/v2-mst-aptd-gcms-lcz-sty/src/pages/_app.tsx

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
	whyDidYouRender(React, {
		trackAllPureComponents: true,
		trackHooks: true,
		logOwnerReasons: true,
		collapseGroups: true
	});
	// eslint-disable-next-line no-console
	console.debug(
		'Applying whyDidYouRender, to help you locate unnecessary re-renders during development. See https://github.com/welldone-software/why-did-you-render'
	);
}

function App({ Component, pageProps }: AppProps): ReactElement {
	const apolloClient: ApolloClient<NormalizedCacheObject> = useApollo(
		pageProps.initializeApollo
	);
	const router: NextRouter = useRouter();
	useEffect(() => {
		gaInit();
		const handleRouteChange = () => {
			logPageView();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.debug(metric);
}

export default App;

// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/pages/_app.js
