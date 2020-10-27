import { Media } from 'lib/window-width';
import { Fragment } from 'react';

const LeadTitle = (): JSX.Element => {
	const TitleMobile = (
		<Media lessThan='md'>
			<div className=''>
				<h1
					className='relative justify-center inline-block w-full min-w-full font-light tracking-wider text-center transition-all ease-in-out transform cursor-default font-head text-custom leading-headerP -translate-y-paddingPostTitleTop'
					style={{ marginBlockStart: '0.47em', marginBlockEnd: '0.67em' }}
				>
					<a className='block text-customWcd'>CIMA</a>
				</h1>
			</div>
		</Media>
	);

	const TitleDesktop = (
		<Media greaterThanOrEqual='md'>
			<div className='tracking-wider'>
				<h1
					className='relative justify-center flex-grow w-full min-w-full font-light tracking-wider text-center transition-all ease-in-out transform cursor-default font-head text-custom leading-headerP -translate-y-paddingPostTitleTop'
					style={{ marginBlockStart: '0.37em', marginBlockEnd: '0.67em' }}
				>
					<a className='block text-customWcd'>CIMA</a>
				</h1>
			</div>
		</Media>
	);

	return (
		<Fragment>
			{TitleMobile}
			{TitleDesktop}
		</Fragment>
	);
};

export default LeadTitle;
