import SectionSeparator from './section-separator';
import Date from './date';
import Modified from './modified';
import { authorType, authorProps } from '../types/posts';
import { Fragment } from 'react';

type AvatarProps = {
	author: authorProps;
	modified: string;
};

export default function Avatar({ author, modified }: AvatarProps) {
	const nombre =
		author.firstName && author.lastName
			? `${author.firstName} ${author.lastName}`
			: author.name;

	return (
		<Fragment>
			<div className='grid grid-cols-4 overflow-hidden text-left transition-all transform ml-mdmxSocial items-left translate-y-portfolio py-portfolio'>
				<div className='flex flex-col w-1/3 mx-portfolioH2F'>
					<img
						src={author.avatar.url}
						className='rounded-full md:w-portfolioLS md:h-portfolioLS w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
						alt={nombre}
					/>
				</div>

				<div className='grid grid-cols-1 grid-rows-2'>
					<div className='col-span-3 align-top font-semib3ld min-w-portfolioPadding'>
						<a className='flex w-full'>{nombre}</a>
					</div>
					<div className='block float-left w-40 col-span-3 align-top font-text-left min-w-aboutImage300'>
						<Modified modifiedString={modified} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

/*
		<Fragment>
			<div className='flex flex-row float-left overflow-hidden text-left transition-all transform ml-mdmxSocial items-left translate-y-portfolio'>
				<div className='flex flex-col w-1/3 mx-portfolioH2F'>
					<img
						src={author.avatar.url}
						className='rounded-full md:w-portfolioLS md:h-portfolioLS w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
						alt={nombre}
					/>
				</div>

				<div className='flex flex-col float-left w-2/3 text-left align-top items-left'>
					<div className='flex flex-row font-semibold align-top w-portfolioPadding min-w-portfolioPadding'>
						<a className='flex w-full'>{nombre}</a>
					</div>
					<div className='flex flex-row float-left w-40 align-top font-text-left min-w-aboutImage300'>
						<Modified modifiedString={modified} />
					</div>
				</div>
			</div>
		</Fragment>
*/
