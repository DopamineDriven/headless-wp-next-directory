import SectionSeparator from './section-separator';
import Date from './date';
import Modified from './modified';
import { authorType, authorProps } from '../types/posts';

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
		<>
			<div className='flex flex-row float-left overflow-hidden text-left transition-all transform ml-mdmxSocial items-left translate-y-portfolio'>
				<div className='flex flex-col w-1/3 mx-portfolioH2F'>
					<img
						src={author.avatar.url}
						className='rounded-full w-portfolioPadding h-portfolioPadding'
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
		</>
	);
}

/*
		<div className='flex items-center justify-center w-full text-center align-middle border-4 border-collapse border-white border-opacity-50 rounded-full shadow-lg bg-blizzardBlue'>
			<img
				src={author.avatar.url}
				className='w-24 h-24 border-2 border-collapse border-transparent border-opacity-75 rounded-full shadow-xl'
				alt={nombre}
			/>
		</div>
*/
