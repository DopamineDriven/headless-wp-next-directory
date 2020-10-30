import ReactMarkdown from 'react-markdown/with-html';
type PostTitleProps = {
	children: string;
};

export default function PostTitle({ children }: PostTitleProps) {
	return (
		<h1 className='text-6xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-polished md:leading-none mb-2 text-center justify-center'>
			<ReactMarkdown escapeHtml={false} source={children} />
		</h1>
	);
}
