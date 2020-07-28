import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Footer = () => {
	return (
		<footer className='bg-cimaRed border-t border-cimaRed'>
			<Container>
				<div className='py-16 flex flex-col lg:flex-row items-center'>
					<h3 className='text-3xl lg:text-4xl font-bold tracking-tighter text-white leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
						Statically Generated with Next.js.
					</h3>
					<div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-6/12'>
						<a
							href='https://nextjs.org/docs/basic-features/pages'
							className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition-colors mb-6 lg:mb-0'
						>
							Read Documentation
						</a>
						<a
							href={`https://github.com/DopamineDriven/${EXAMPLE_PATH}`}
							className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition-colors mb-6 lg:mb-0'
						>
							View on GitHub
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
