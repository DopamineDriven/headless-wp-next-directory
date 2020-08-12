import { useState } from 'react';
import Link from 'next/link';
import SvgLogo from './svg-logo-only';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HeaderSVG from './header-svg';
import Container from "./container";

interface NavRef {
	href: string;
	label: string;
}

type HeaderProps = {
	props: string | number;
};

const links: NavRef[] = [
	{
		href: '/contact',
		label: 'Contact'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/',
		label: 'Directory'
	}
];

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);
	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className='px-3 py-2 flex items-right float-right text-lg uppercase font-bold leading-snug text-white hover:opacity-75'
					aria-label={link.label}
				>
					{link.label}
				</a>
			</Link>
		</li>
	));
	const myImage = () => {
		return (
			<img src="/assets/headerheroheightreduced" alt="my image" />
		)
	}
	// https://emortlock.github.io/tailwind-react-ui/#header-1
	// src image https://res.cloudinary.com/asross311/image/upload/v1597147257/ASR_Assets/headerhero_euqvup.jpg
	return (
		<nav className="h-half mb-5 container overflow-y-hidden overflow-x-hidden -mx-5">
			<Container>
		
			<div
				className='absolute flex flex-row w-full h-full min-h-full antialiased'
				style={{
					backgroundImage:
						`url(https://res.cloudinary.com/asross311/image/upload/v1597147257/ASR_Assets/headerhero_euqvup.jpg)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 50%',
				}}
			>
				<div className='container flex flex-row justify-between mx-10 my-5'>
					<div className='flex flex-row justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link href='/'>
							<a className="flex">{<SvgLogo props={props} />}</a>
						</Link>
						<button
							className='text-black cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
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
							'lg:flex flex-grow text-right float-right items-right align-middle' +
							(navOpen ? ' flex float-right' : ' hidden')
						}
					>
						<ul className='flex flex-col lg:flex-row-reverse list-none lg:ml-auto font-polished w-full items-right float-right text-right'>
							{navlist}
						</ul>
					</div>
				</div>
			</div>

		</Container>
		</nav>
	);
};

export default Header;

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
