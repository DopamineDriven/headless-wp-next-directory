import { Fragment } from 'react';
import Meta from 'components/meta';
import LeadIcon from '@components/Lead/lead-cima-icon';
import LeadSpan from '@components/Lead/lead-span';
import LeadSocial from '@components/Lead/lead-social';

const Lead = () => {
	return (
		<Fragment>
			<Meta />
			<header
				className='container relative flex flex-col justify-between w-full min-w-full overflow-x-hidden overflow-y-hidden transform select-none z-1 pt-portfolio navbar-expand-lg pb-portfolioPadding md:pb-portfolio'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<LeadIcon />
				{/* <LeadTitle /> */}
				<LeadSpan />
				<LeadSocial />
			</header>
		</Fragment>
	);
};

export default Lead;

// USE
// https://fossheim.io/writing/posts/react-text-splitting-animations/
