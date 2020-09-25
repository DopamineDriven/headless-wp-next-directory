import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Layout from '../components/layout';
import Container from '../components/container';
import { CLIENT_NAME } from '../lib/constants';

interface Props {
	props: string | number;
	preview?: boolean;
}

const Contact = ({ preview, props }: Props) => {
	return (
		<>
			<Header />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} contact page`}</title>
				</Head>
				<Container>
					<h2 className='mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
						<Link href='/'>
							<a className='px-8 hover:underline text-cimaRed'>
								Contact
							</a>
						</Link>
					</h2>
				</Container>
			</Layout>
		</>
	);
};

export default Contact;
