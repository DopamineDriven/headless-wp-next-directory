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
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	config.autoAddCss = false;
	library.add(
		faFacebook,
		faGithub,
		faGoogle,
		faLinkedin,
		faSnapchat,
		faTwitter
	);
	return <Component {...pageProps} />;
}

export default App;
