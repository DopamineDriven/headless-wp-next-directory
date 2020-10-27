import CimaLogo from 'components/svg-logo-only';
import Link from 'next/link';
import { Media } from 'lib/window-width';
import { Fragment } from 'react';
import DarkMode from 'components/lead-dark-mode';
import LeadTitle from 'components/lead-title';

const CimaIconConditional = (): JSX.Element => {
	const cimaIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container justify-center block w-full min-w-full mx-auto transition-transform transform translate-x-aboutHackingFontAwesomePT py-portfolio'
					id='top'
					aria-label='top'
				>
					<CimaLogo
						width='18vw'
						height='18vw'
						classNameSVG=' antialised w-svgIcon max-w-svgIcon transform transition-all'
						classNameP1=' fill-primary'
						classNameP2=' fill-primary'
						classNameP3=' fill-primary'
					/>
				</a>
			</Link>
		</Media>
	);

	const cimaIconSm: JSX.Element = (
		<Media at='sm'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					id='top'
					aria-label='top'
				>
					<CimaLogo
						width='15vw'
						height='15vw'
						classNameSVG=' antialised w-svgIcon max-w-svgIcon transform transition-all'
						classNameP1=' fill-primary'
						classNameP2=' fill-primary'
						classNameP3=' fill-primary'
					/>
				</a>
			</Link>
		</Media>
	);

	const cimaIconMd: JSX.Element = (
		<Media at='md'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
					id='top'
					aria-label='top'
				>
					<CimaLogo
						width='12.5vw'
						height='12.5vw'
						classNameSVG=' antialised w-svgIcon max-w-svgIcon transform transition-all'
						classNameP1=' fill-primary'
						classNameP2=' fill-primary'
						classNameP3=' fill-primary'
					/>
				</a>
			</Link>
		</Media>
	);

	const cimaIconDesktop: JSX.Element = (
		<Media greaterThan='md'>
			<Link href='/'>
				<a
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio'
					id='top'
					aria-label='top'
				>
					<CimaLogo
						width='10vw'
						height='10vw'
						classNameSVG=' antialised w-svgIcon max-w-svgIcon transform transition-all'
						classNameP1=' fill-primary'
						classNameP2=' fill-primary'
						classNameP3=' fill-primary'
					/>
				</a>
			</Link>
		</Media>
	);

	const InlineTitle = () => (
		<div className='col-span-3 text-right transition-all transform md:pt-portfolio md:text-customTitle md:-translate-y-mdmxSocial translate-y-portfolioLSMobile -translate-x-portfolioPadding'>
			<LeadTitle />
		</div>
	);

	const DarkModeToggler = (): JSX.Element => (
		<div className='col-span-1 text-right transition-all transform md:pt-portfolio md:text-customTitle md:-translate-y-mdmxSocial translate-y-portfolioLSMobile -translate-x-portfolioPadding'>
			<DarkMode />
		</div>
	);

	const CimaIconsCoalesced = (): JSX.Element => (
		<Fragment>
			<div className='relative justify-between block w-full min-w-full col-span-2 transition-all lg:w-auto lg:static lg:block lg:justify-start'>
				{cimaIconXs}
				{cimaIconSm}
				{cimaIconMd}
				{cimaIconDesktop}
			</div>
		</Fragment>
	);
	return (
		<Fragment>
			<div className='container relative grid justify-between w-full min-w-full grid-cols-6 overflow-x-hidden overflow-y-hidden transform select-none z-1 pt-portfolioDivider navbar-expand-lg'>
				<CimaIconsCoalesced />
				<InlineTitle />
				<DarkModeToggler />
			</div>
		</Fragment>
	);
};

export default CimaIconConditional;
