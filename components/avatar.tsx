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
			<div className='ml-1 mt-1 flex flex-row items-left text-left float-left overflow-hidden'>
				<div className='flex flex-col w-1/3 mr-6'>
					<img
						src={author.avatar.url}
						className='h-12 w-12 rounded-full'
						alt={nombre}
					/>
				</div>

				<div className='flex flex-col w-2/3 my-0 text-sm pt-1 pb-2 items-left align-top text-left float-left -mx-5'>
					<div className='flex flex-row w-32 align-top font-semibold font-subpolished'>
						<a className='flex w-full'>{nombre}</a>
					</div>
					<div className='flex flex-row text-xs text-gray-500 text-left align-top float-left font-subpolished'>
						<Modified modifiedString={modified} />
					</div>
				</div>
			</div>
		</>
	);
}

/*
		<div className='flex w-full items-center text-center align-middle justify-center rounded-full shadow-lg border-collapse bg-blizzardBlue border-4 border-white border-opacity-50'>
			<img
				src={author.avatar.url}
				className='h-24 w-24 rounded-full border-transparent border-collapse border-opacity-75 border-2 shadow-xl'
				alt={nombre}
			/>
		</div>
*/
