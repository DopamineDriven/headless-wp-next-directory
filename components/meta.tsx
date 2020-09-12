import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';
import { Fragment } from 'react';

const MetaData = () => {
	return (
		<Fragment>
			<Head>
				<link
					rel='apple-icon-57x57'
					type='img/png'
					sizes='57x57'
					href='/favicon/apple-icon-57x57.png'
				/>
				<link
					rel='apple-icon-60x60'
					type='img/png'
					sizes='60x60'
					href='/favicon/apple-icon-60x60.png'
				/>
				<link
					rel='apple-icon-72x72'
					type='img/png'
					sizes='72x72'
					href='/favicon/apple-icon-72x72.png'
				/>
				<link
					rel='apple-icon-76x76'
					type='img/png'
					sizes='76x76'
					href='/favicon/apple-icon-76x76.png'
				/>
				<link
					rel='apple-icon-114x114'
					type='img/png'
					sizes='114x114'
					href='/favicon/apple-icon-114x114.png'
				/>
				<link
					rel='apple-icon-120x120'
					type='img/png'
					sizes='120x120'
					href='/favicon/apple-icon-120x120.png'
				/>
				<link
					rel='apple-icon-144x144'
					type='img/png'
					sizes='144x144'
					href='/favicon/apple-icon-144x144.png'
				/>
				<link
					rel='apple-icon-152x152'
					type='img/png'
					sizes='152x152'
					href='/favicon/apple-icon-152x152.png'
				/>
				<link
					rel='apple-icon-180x180'
					type='img/png'
					sizes='180x180'
					href='/favicon/apple-icon-180x180.png'
				/>
				<link
					rel='apple-icon-precomposed'
					type='img/png'
					sizes='192x192'
					href='/favicon/apple-icon-precomposed.png'
				/>
				<link
					rel='apple-touch-icon'
					type='img/png'
					sizes='192x192'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='96x96'
					href='/favicon/favicon-96x96.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicon/manifest.json' />
				<link
					rel='mask-icon'
					href='/favicon/safari-pinned-tab.svg'
					color='#b8242c'
				/>
				<link rel='shortcut icon' href='/favicon/favicon.ico' />
				<link
					rel='canonical'
					href='https://headless-wp-next-directory.vercel.app/'
				/>
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta
					name='msapplication-config'
					content='/favicon/browserconfig.xml'
				/>
				<meta name='theme-color' content='#b8242c' />
				<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
				<meta
					name='description'
					content={`Static Site Generation via Next.js and ${CMS_NAME}.`}
				/>
				<meta property='og:image' content={HOME_OG_IMAGE_URL} />
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='vieweport'
					content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<meta
					name='keywords'
					content='nextjs, typescript, react, wordpress, tailwindcss, vercel'
				/>
			</Head>
		</Fragment>
	);
};

export default MetaData;
