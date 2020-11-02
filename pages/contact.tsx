import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/lead';
import Layout from '../components/Layout/layout';
import Container from '../components/Container/container';
import { CLIENT_NAME } from '../lib/constants';
import { MediaContextProvider } from '../lib/window-width';
import { Fragment } from 'react';

interface Props {
	preview?: boolean;
}

const Contact = ({ preview }: Props) => {
	return (
		<Fragment>
			<MediaContextProvider>
				<Header />
				<Layout preview={preview}>
					<Head>
						<title>{`${CLIENT_NAME} contact page`}</title>
					</Head>
					<Container>
						<h2 className='mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
							<Link href='/'>
								<a className='px-8 hover:underline text-cimaRed'>Contact</a>
							</Link>
						</h2>
					</Container>
				</Layout>
			</MediaContextProvider>
		</Fragment>
	);
};

export default Contact;
