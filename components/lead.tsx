import { Fragment } from 'react';
import Meta from 'components/meta';
import LeadIcon from 'components/lead-cima-icon';
import LeadSpan from 'components/lead-span';
import LeadSocial from 'components/lead-social';
import LeadTitle from 'components/lead-title';
// import { Toggle } from 'components/lead-toggle';

const Lead = (): JSX.Element => {
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
