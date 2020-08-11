import styles from './post-body.module.css';

type PostBodyProps = {
	content: string;
};

export default function PostBody({ content }: PostBodyProps) {
	return (
		<>
		<div className='max-w-3xl mx-auto content-center text-left items-center justify-center align-middle'>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
		<div className='mb-6 text-lg grid-cols-1'>
		<hr className='border-customGray mt-2 mb-10 w-full' />
		</div>
		</>
	);
}
