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
		<div className='flex items-center'>
			<img
				src={author.avatar.url}
				className='h14 w-14 rounded-full border-black border-2 shadow-large'
				alt={nombre}
			/>
		</div>
	);
}
