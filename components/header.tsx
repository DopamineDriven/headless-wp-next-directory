import { useState } from 'react';
import Link from 'next/link';
import SvgLogo from './svg-logo-only';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Container from './container';

interface NavRef {
	href: string;
	label: string;
}

type HeaderProps = {
	props: string | number;
};

const links: NavRef[] = [
	{
		href: '/',
		label: 'Directory'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.href}-${link.label}`}>
			<Link href={link.href} passHref as={`/${link.label}`}>
				<a
					className='px-3 pb-2 flex items-center float-right text-right text-xl w-full sm:text-2xl font-bold leading-tight sm:leading-none text-white font-header hover:opacity-75'
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	// calculate vpw/vph - https://www.hawatel.com/blog/handle-window-resize-in-react/
	// hamburger menu hidden when >=640px; visible when <640px
	const heightOnOpen = navOpen ? ' h-twoFifths' : ' h-oneThird';
	return (
		<nav
			className={`flex flex-row flex-wrap xl:h-half lg:h-nineTwentieths md:h-twoFifths sm:h-twoFifths ${heightOnOpen} pb-20 xl:mb-2 container overflow-y-hidden overflow-x-hidden -mx-5`}
		>
			<Container>
				<div
					className={`xl:h-half lg:h-nineTwentieths md:h-twoFifths sm:h-twoFifths ${heightOnOpen} transform duration-1000 absolute flex flex-row w-full bg-contain antialiased`}
					style={{
						backgroundImage: `url(https://res.cloudinary.com/asross311/image/upload/v1597147257/ASR_Assets/headerhero_euqvup.jpg)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%'
					}}
				>
					<Container>
						<div className='container flex flex-wrap px-4 justify-between mx-auto'>
							<div className='flex w-full relative sm:flex-row justify-between sm:w-auto sm:static sm:justify-start sm:block'>
								<Link href='/'>
									<a className='inline-block leading-relaxed mr-4 whitespace-no-wrap '>
										{<SvgLogo props={props} />}
									</a>
								</Link>
								<button
									className='text-white block cursor-pointer text-xl leading-none px-3 border border-solid border-transparent rounded bg-transparent sm:hidden outline-none focus:outline-none'
									type='button'
									onClick={() => setNavOpen(!navOpen)}
									name='open-nav-button'
								>
									{navOpen ? (
										<a
											aria-label='open-nav'
											className='transition-colors duration-1000 hover:opacity-75'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-6 w-6 transition transform rotate-180 duration-1000 hover-opacity-75'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													stroke='currentColor'
												/>
											</svg>
										</a>
									) : (
										<a
											aria-label='open-nav'
											className='transition-colors duration-1000 hover:opacity-75 transform rotate-45'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-6 w-6 transform rotate-45 transition duration-1000 hover:opacity-75'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													stroke='currentColor'
												/>
											</svg>
										</a>
									)}
								</button>
							</div>
							<div
								className={
									'sm:flex flex-grow items-center' +
									(navOpen ? ' flex' : ' hidden')
								}
							>
								<ul className='flex flex-col sm:flex-row list-none sm:ml-auto'>
									{navlist}
								</ul>
							</div>
						</div>
					</Container>
				</div>
			</Container>
		</nav>
	);
};

export default Header;
// <ul className='flex flex-col-reverse sm:flex-row-reverse sm:text-smxmd list-none sm:ml-auto font-polished w-full float-right text-right sm:pt-4'>
// text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none
/*
import { useState } from 'react';
import Link from 'next/link';
import SvgLogo from './svg-logo-only';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavRef {
	href: string;
	label: string;
}

type HeaderProps = {
	props: string | number;
};

const links: NavRef[] = [
	{
		href: '/',
		label: 'Directory'
	},
	{
		href: '/contact',
		label: 'Contact'
	},
	{
		href: '/about',
		label: 'About'
	}
];

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className='px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75'
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	return (
		<nav className='relative flex flex-wrap shadow-boxshadow items-center justify-between px-2 py-1 navbar-expand-lg bg-cimaRed'>
			<div className='container mx-auto flex flex-wrap items-center justify-between'>
				<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
					<Link href='/'>
						<a>{<SvgLogo props={props} />}</a>
					</Link>
					<button
						className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavOpen(!navOpen)}
						name='open-nav-button'
					>
						<a aria-label='open-nav'>
							<FontAwesomeIcon icon={faBars} />
						</a>
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-right' +
						(navOpen ? ' flex float-right' : ' hidden')
					}
				>
					<ul className='flex flex-col lg:flex-row list-none lg:ml-auto font-body'>
						{navlist}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;

*/
