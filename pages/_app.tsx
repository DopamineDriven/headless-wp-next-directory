import '../styles/index.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
	faFacebook,
	faGithub,
	faGoogle,
	faLinkedin,
	faSnapchat,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppProps } from 'next/app';

config.autoAddCss = false;
library.add(
	faBars,
	faFacebook,
	faGithub,
	faGoogle,
	faLinkedin,
	faSnapchat,
	faTwitter
);

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default App;

// Configuring Fortawesome with nextjs v9+
// https://github.com/UnlyEd/next-right-now/blob/master/src/pages/_app.tsx
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
