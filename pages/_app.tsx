import '../styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement } from 'react';

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}

export default App;

// Configuring Fortawesome with nextjs v9+
// https://github.com/UnlyEd/next-right-now/blob/master/src/pages/_app.tsx
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
