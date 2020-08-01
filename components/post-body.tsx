import postBodyStyles from './post-body.module.css';

const PostBody = ({ content }: any) => {
	return (
		<div className='max-w-2xl mx-auto'>
			<div
				className={postBodyStyles.content}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default PostBody;
