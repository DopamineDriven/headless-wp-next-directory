import { useState } from 'react';
import Link from 'next/link';
import SvgLogo from './svg-logo-only';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface Props {
	props: string | number;
}

const Header = ({ props }: Props) => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<nav className='relative flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-cimaRed mb-3'>
			<div className='container mx-auto flex flex-wrap items-center justify-between'>
				<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
					<Link href='/'>
						<a>{<SvgLogo props={props} />}</a>
					</Link>
					<button
						className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavOpen(!navOpen)}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-right' +
						(navOpen ? ' flex float-right' : ' hidden')
					}
				>
					<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
						<li className='nav-item'>
							<Link href='/'>
								<a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
									Directory
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/about'>
								<a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
									About
								</a>
							</Link>
						</li>
						<li class-name='nav-item'>
							<Link href='/contact'>
								<a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
									Contact
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;

// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
