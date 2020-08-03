type PostTitleProps = {
	children: string;
};

export default function PostTitle({ children }: PostTitleProps) {
	return (
		<h1
			className='text-6xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center justify-center'
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
}
