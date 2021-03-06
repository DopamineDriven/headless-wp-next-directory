import useDarkMode, { DarkMode } from 'use-dark-mode';
import { Media } from 'lib/window-width';
import DarkIcons from '../DarkIcons';
import { Fragment } from 'react';

const LeadDarkModeConditional = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();

	const DarkMobile = (): JSX.Element => {
		return darkMode.value === true ? (
			<Media lessThan='md'>
				<DarkIcons
					onChange={darkMode.toggle}
					checked={true}
					className='transition-colors transform outline-none stroke-current fill-primary text-primary rotate-290'
					width='9vw'
					height='9vw'
				/>
			</Media>
		) : (
			<Media lessThan='md'>
				<DarkIcons
					onChange={darkMode.toggle}
					checked={false}
					className='transition-colors transform outline-none fill-current stroke-current text-primary text-customTitle rotate-855'
					width='9vw'
					height='9vw'
				/>
			</Media>
		);
	};

	const DarkDesktop = (): JSX.Element => {
		return darkMode.value === true ? (
			<Media greaterThanOrEqual='md'>
				<DarkIcons
					onChange={darkMode.toggle}
					checked={true}
					className='transition-colors transform outline-none stroke-current fill-primary text-primary rotate-290'
					width='6.5vw'
					height='6.5vw'
				/>
			</Media>
		) : (
			<Media greaterThanOrEqual='md'>
				<DarkIcons
					onChange={darkMode.toggle}
					checked={false}
					className='transition-colors transform outline-none fill-current stroke-current text-primary text-customTitle rotate-855'
					width='6vw'
					height='6vw'
				/>
			</Media>
		);
	};

	return (
		<Fragment>
			<div className='inline-block align-top md:transform md:-translate-y-portfolioDivider'>
				<DarkMobile />
				<DarkDesktop />
			</div>
		</Fragment>
	);
};

export default LeadDarkModeConditional;
