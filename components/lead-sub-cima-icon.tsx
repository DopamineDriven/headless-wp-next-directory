import { CimaLogo } from './Svg';
import Link from 'next/link';
import { Media } from 'lib/window-width';
import { Fragment } from 'react';
import DarkMode from 'components/lead-dark-mode';

const SubCimaIconConditional = (): JSX.Element => {
	const cimaIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					aria-label='sub-icon'
				>
					<CimaLogo width='18vw' height='18vw' />
				</a>
			</Link>
		</Media>
	);

	const cimaIconSm: JSX.Element = (
		<Media at='sm'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					aria-label='sub-icon'
				>
					<CimaLogo width='15vw' height='15vw' />
				</a>
			</Link>
		</Media>
	);

	const cimaIconMd: JSX.Element = (
		<Media at='md'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					aria-label='sub-icon'
				>
					<CimaLogo width='12.5vw' height='12.5vw' />
				</a>
			</Link>
		</Media>
	);

	const cimaIconDesktop: JSX.Element = (
		<Media greaterThan='md'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					aria-label='sub-icon'
				>
					<CimaLogo width='10vw' height='10vw' />
				</a>
			</Link>
		</Media>
	);
	const DarkModeToggler = (): JSX.Element => (
		<div className='col-span-4 text-right transition-all transform md:pt-portfolio md:text-customTitle md:-translate-y-mdmxSocial translate-y-portfolioLSMobile -translate-x-portfolioPadding'>
			<DarkMode />
		</div>
	);

	const CimaIconsCoalesced = (): JSX.Element => (
		<Fragment>
			<div className='relative justify-between block w-full min-w-full col-span-5 transition-all lg:w-auto lg:static lg:block lg:justify-start'>
				{cimaIconXs}
				{cimaIconSm}
				{cimaIconMd}
				{cimaIconDesktop}
			</div>
		</Fragment>
	);
	return (
		<Fragment>
			<div className='relative justify-between block w-full min-w-full transition-all lg:w-auto lg:static lg:block lg:justify-start'>
				<CimaIconsCoalesced />
			</div>
		</Fragment>
	);
};

export default SubCimaIconConditional;
