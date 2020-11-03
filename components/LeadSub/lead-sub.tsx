import { Fragment } from 'react';
import Meta from '@components/Meta/meta';
import LeadSubIcon from './lead-sub-cima-icon';
import LeadSubReturnHome from './lead-sub-return-home';
import { LeadDarkModeToggle } from '@components/Lead';

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
					<LeadDarkModeToggle />
				</div>
			</header>
		</Fragment>
	);
};

export default LeadSub;
