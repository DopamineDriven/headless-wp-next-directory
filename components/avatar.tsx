import SectionSeparator from './section-separator';

type AvatarProps = {
	author: any;
};

export default function Avatar({ author }: AvatarProps) {
	const nombre =
		author.firstName && author.lastName
			? `${author.firstName} ${author.lastName}`
			: author.name;

	return (
		<div className='flex w-full items-center text-center align-middle justify-center rounded-full'>
			<img
				src={author.avatar.url}
				className='h-24 w-24 rounded-full border-tinyHouseWhite border-collapse border-opacity-50 border-4 shadow-xl'
				alt={nombre}
			/>
		</div>
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