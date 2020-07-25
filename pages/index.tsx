import Header from '../components/fixed-header';
import Link from 'next/link';

interface Props {
	props: string | number;
}

const Index = ({ props }: Props) => {
	return (
		<>
			<Header props={props} />
			<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
				<Link href='/'>
					<a className='hover:underline text-cimaRed px-8'>
						Chicago Independent Media Alliance
					</a>
				</Link>
			</h2>
		</>
	);
};

export default Index;
