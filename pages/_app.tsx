import 'styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gaInit, logPageView } from 'lib/google-analytics';

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps): ReactElement {
	const router = useRouter();
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
	return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}

export default App;
