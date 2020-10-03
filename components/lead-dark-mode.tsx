import useDarkMode, { DarkMode } from 'use-dark-mode';
import useClient from 'lib/isClient';
import { Fragment } from 'react';
import LeadDarkModeConditional from 'components/lead-dark-mode-conditional';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();
	const isClient = useClient();

	const Conditional = (): JSX.Element => {
		return isClient ? (
			<div className='container justify-between block w-full min-w-full mx-auto transition-all transform outline-none pr-portfolio translate-y-portfolioLS'>
				<button
					type='button'
					aria-label='light mode vs dark mode'
					onClick={darkMode.value === true ? darkMode.disable : darkMode.enable}
					className='outline-none stroke-current  fill-primary text-primary'
				>
					<Fragment>
						{/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
						<LeadDarkModeConditional />
					</Fragment>
				</button>
			</div>
		) : (
			<span>...</span>
		);
	};

	return <Conditional />;
};

export default LeadDarkModeToggle;

// https://github.com/donavon/use-dark-mode/blob/develop/types/index.d.ts
