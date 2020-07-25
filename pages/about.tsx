import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/fixed-header';
import Layout from '../components/layout';
import Container from '../components/container';
import { CLIENT_NAME } from '../lib/constants';

interface Props {
	props: string | number;
	preview?: boolean;
}

const About = ({ preview, props }: Props) => {
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} about page`}</title>
				</Head>
				<Container>
					<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						<Link href='/'>
							<a className='hover:underline text-cimaRed px-8'>
								Chicago Independent Media Alliance
							</a>
						</Link>
					</h2>
				</Container>
			</Layout>
		</>
	);
};

export default About;
