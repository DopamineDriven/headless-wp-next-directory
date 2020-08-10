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
			<div className='grid grid-cols-3 items-left text-left align-middle justify-center rounded-full float-left overflow-hidden'>
				<div>
					<img
						src={author.avatar.url}
						className='h-16 w-16 rounded-full border-tinyHouseWhite border-collapse border-opacity-50 border-4'
						alt={nombre}
					/>
				</div>
				<div className='grid grid-rows-2 py-0 my-0 text-sm pt-2 w-full items-left text-left float-left justify-center'>
					<div className="align-bottom">{nombre}</div>
					<div className='text-xs text-gray-500 text-left align-top'>
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
