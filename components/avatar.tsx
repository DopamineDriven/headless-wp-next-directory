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
				className='w-16 h-16 rounded-full mr-4'
				alt={nombre}
			/>
			<div className='text-xl font-bold'>{nombre}</div>
		</div>
	);
}
