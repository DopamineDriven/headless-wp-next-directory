import { Fragment, useState } from 'react';
import Link from 'next/link';
import SvgLogo from './CimaLogo/cima-logo';
import Container from './Container/container';

interface NavRef {
	href: string;
	label: string;
}

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

const Header = (): JSX.Element => {
	const [navOpen, setNavOpen] = useState(false);
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.label}`}>
			<Link href={link.href} passHref as={`${link.href}`}>
				<a
					className='flex items-center float-right w-full min-w-full px-3 pb-2 text-xl font-bold leading-tight text-right text-white sm:text-2xl sm:leading-none font-header hover:opacity-75'
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	const svgLogo = (
		<Link href='/'>
			<a
				className='z-50 inline-block float-left mr-4 leading-relaxed whitespace-no-wrap'
				style={{}}
			>
				{<SvgLogo />}
			</a>
		</Link>
	);

	const navListMapped = (
		<div
			className={
				'sm:flex flex-grow items-center' + (navOpen ? ' flex' : ' hidden')
			}
		>
			<ul className='flex flex-col list-none sm:flex-row sm:ml-auto pt-portfolio pr-portfolio'>
				{navlist}
			</ul>
		</div>
	);

	const navOpenTernaryThen = (
		<a
			aria-label='open-nav'
			className='transition-colors duration-1000 hover:opacity-75'
		>
			<svg
				fill='none'
				viewBox='0 0 24 24'
				className='w-6 h-6 transition duration-1000 transform rotate-180 hover-opacity-75'
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
	);

	const navOpenTernaryElse = (
		<a
			aria-label='open-nav'
			className='transition-colors duration-1000 transform rotate-45 hover:opacity-75'
		>
			<svg
				fill='none'
				viewBox='0 0 24 24'
				className='w-6 h-6 transition duration-1000 transform rotate-45 hover:opacity-75'
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
	);
	// calculate vpw/vph - https://www.hawatel.com/blog/handle-window-resize-in-react/
	// hamburger menu hidden when >=640px; visible when <640px
	const heightOnOpen = navOpen ? ' h-twoFifths' : ' h-oneThird';
	return (
		<Fragment>
			<nav
				className={`flex flex-row flex-wrap xl:h-half lg:h-nineTwentieths md:h-twoFifths sm:h-twoFifths ${heightOnOpen} pb-portfolio xl:mb-2 container overflow-y-hidden overflow-x-hidden w-full min-w-full`}
				style={{
					backgroundImage: `url(https://res.cloudinary.com/asross311/image/upload/v1597147257/ASR_Assets/headerhero_euqvup.jpg)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%'
				}}
			>
				<Container>
					<div
						className={`xl:h-half lg:h-nineTwentieths md:h-twoFifths sm:h-twoFifths ${heightOnOpen} transition-all transform duration-3000 absolute w-full wp-cover-image antialiased`}
					>
						{svgLogo}
						<Container>
							<div className='container flex flex-wrap justify-between px-4 mx-auto'>
								<div className='justify-between block sm:flex-row sm:w-auto sm:static sm:justify-start sm:block'>
									<button
										className='block px-3 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer sm:hidden focus:outline-none'
										type='button'
										onClick={() => setNavOpen(!navOpen)}
										name='open-nav-button'
									>
										{navOpen ? navOpenTernaryThen : navOpenTernaryElse}
									</button>
								</div>
								{navListMapped}
							</div>
						</Container>
					</div>
				</Container>
			</nav>
		</Fragment>
	);
};

export default Header;
// <ul className='flex flex-col-reverse float-right w-full text-right list-none sm:flex-row-reverse sm:text-smxmd sm:ml-auto font-polished sm:pt-4'>
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
					className='flex items-center px-3 py-2 text-lg font-bold leading-snug text-white uppercase hover:opacity-75'
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	return (
		<nav className='relative flex flex-wrap items-center justify-between px-2 py-1 shadow-boxshadow navbar-expand-lg bg-cimaRed'>
			<div className='container flex flex-wrap items-center justify-between mx-auto'>
				<div className='relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start'>
					<Link href='/'>
						<a>{<SvgLogo props={props} />}</a>
					</Link>
					<button
						className='block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none'
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
					<ul className='flex flex-col list-none lg:flex-row lg:ml-auto font-body'>
						{navlist}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;

*/
