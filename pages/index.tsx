import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/fixed-header';
import Layout from '../components/layout';
import Container from '../components/container';
import { CLIENT_NAME } from '../lib/constants';
import SearchBox from '../components/search-box';
import SocialMediaCima from '../components/social-media-cima';

interface Props {
	props: string | number;
	preview?: boolean;
}

const Index = ({ preview, props }: Props) => {
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} landing page`}</title>
				</Head>
				<Container>
					<SearchBox />
					<h2 className='md:text-4xl font-bold text-center font-serif tracking-tight md:tracking-tighter leading-tight mb-8 mt-2'>
						<Link href='/'>
							<a className='hover:text-cimaRed cursor-text select-text text-black px-8'>
								Chicago Independent Media Alliance
							</a>
						</Link>
					</h2>
				</Container>
			</Layout>
		</>
	);
};

export default Index;
