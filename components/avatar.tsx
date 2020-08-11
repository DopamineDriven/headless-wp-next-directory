import SectionSeparator from './section-separator';
import Date from './date';

type AvatarProps = {
	author: any;
	date: string;
};

export default function Avatar({ author, date }: AvatarProps) {
	const nombre =
		author.firstName && author.lastName
			? `${author.firstName} ${author.lastName}`
			: author.name;

	return (
		<>
			<div className='grid grid-cols-3 items-left text-left rounded-full float-left overflow-hidden'>
				<div className='grid grid-rows-1 pl-4'>
					<img
						src={author.avatar.url}
						className='h-12 w-12 rounded-full'
						alt={nombre}
					/>
				</div>
				<div className='grid grid-rows-2 my-0 text-sm pt-1 w-full pb-2 items-left align-top text-left float-left'>
					<div className="align-top font-semibold font-subpolished">{nombre}</div>
					<div className='text-xs text-gray-500 text-left align-top float-left font-subpolished'>
						<Date dateString={date} />
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
