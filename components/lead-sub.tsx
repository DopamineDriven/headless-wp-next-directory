import { Fragment } from 'react';
import Meta from 'components/meta';
import LeadSubIcon from 'components/lead-sub-cima-icon';
import LeadSubReturnHome from 'components/lead-sub-return-home';
import DarkMode from '@components/Lead/lead-dark-mode-toggle';

interface LeadSubProps {
	title: string;
}

const LeadSub = ({ title }: LeadSubProps): JSX.Element => {
	return (
		<Fragment>
			<Meta />
			<header className='select-none relative justify-between pt-portfolioDivider grid grid-cols-3 min-w-full w-full container overflow-y-hidden overflow-x-hidden'>
				<LeadSubIcon />
				<LeadSubReturnHome title={title} />
				<div className=' pt-portfolioLS text-center text-primary  block w-full min-w-full transition-all transform translate-x-portfolioPadding'>
					<DarkMode />
				</div>
			</header>
		</Fragment>
	);
};

export default LeadSub;
