import styles from './post-body.module.css';

type PostBodyProps = {
	content: string;
};

export default function PostBody({ content }: PostBodyProps) {
	return (
		<div className='max-w-3xl mx-auto content-center text-center items-center justify-center align-middle'>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}
