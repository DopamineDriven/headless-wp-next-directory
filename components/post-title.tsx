type Props = {
	children?: any;
};

const PostTitle = ({ children }: Props) => {
	return (
		<h1
			className='text-6xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
};

export default PostTitle;
