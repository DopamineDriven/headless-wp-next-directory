import Link from 'next/link';
import SvgLogo from './svg-logo-only';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface Props {
	props: string | number;
}

const Header = ({ props }: Props) => {
	return (
		<nav className='flex items-center justify-between flex-wrap bg-cimaRed p-6'>
			<div className='flex items-center flex-shrink-0 text-white mr-4'>
				<Link href='/'>
					<a>{<SvgLogo props={props} />}</a>
				</Link>
				<span className='font-semibold text-xl tracking-tight'></span>
			</div>
			<div className='block lg:hidden'>
				<button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-md lg:flex-grow'>
					<Link href='/'>
						<a className='block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-black hover:font-bold mr-4'>
							Directory
						</a>
					</Link>
					<Link href='/about'>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-black hover:font-bold  mr-4'
						>
							About
						</a>
					</Link>
					<Link href='/contact'>
						<a
							href='#responsive-header'
							className='block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-black hover:font-bold'
						>
							Contact
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;

/*
			<div>
				<a
					href='#'
					className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
				>
					Download
				</a>
            </div>
            

            const Header = () => {
	return (
		<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
			<Link href='/'>
				<a className='hover:underline'>This Blog Fucks.</a>
			</Link>
		</h2>
	);
};
*/
