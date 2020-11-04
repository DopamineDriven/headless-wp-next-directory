import markdownStyles from './sub-post-body.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';

interface PostBodyProps {
	content: string | null;
}

const CodeBlock = ({
	language,
	value
}: SyntaxHighlighterProps): JSX.Element => {
	return (
		<SyntaxHighlighter
			language={language}
			useInlineStyles={true}
			className=' text-shadow-none'
		>
			{value}
			{/* {children.replace(/^\s+|\s+$/g, '')} */}
		</SyntaxHighlighter>
	);
};

interface PostBodyPropsFC extends FC<PostBodyProps> {}

const SubPostBody: PostBodyPropsFC = props => {
	const { content } = props;

	const ContentConditional = () => {
		return content ? (
			<ReactMarkdown
				className={markdownStyles['content'] + ' text-shadow-none'}
				escapeHtml={false}
				source={content}
				renderers={{ code: CodeBlock }}
			/>
		) : (
			<ReactMarkdown
				className={markdownStyles['content'] + ' text-shadow-none'}
				escapeHtml={false}
				source={`content failed to load`}
				renderers={{ code: CodeBlock }}
			/>
		);
	};

	return (
		<>
			<div className='text-shadow-none shadow-none select-none mx-auto content-center text-left md:text-left md:text-customP items-center justify-center align-middle max-w-xsCardGridCima '>
				<ContentConditional />
			</div>
		</>
	);
};

export default SubPostBody;
