import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
interface PostTitleProps {
	title: string | null;
}

export interface SubPostTitleFC extends FC<PostTitleProps> {}

const SubPostTitle: SubPostTitleFC = props => {
	const { title } = props;
	return (
		<h1 className='text-6xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-polished md:leading-none mb-2 text-center justify-center'>
			{title ? (
				<ReactMarkdown escapeHtml={false} source={title} />
			) : (
				<ReactMarkdown escapeHtml={false} source={'title error'} />
			)}
		</h1>
	);
};

export default SubPostTitle;
