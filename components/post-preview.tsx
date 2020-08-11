import Avatar from './avatar';
import Date from './date';
import CoverImage, { CoverImageProps } from './cover-image';
import Link from 'next/link';

type PostPreviewProps = {
	coverImage: CoverImageProps;
	title: string;
	date: string;
	excerpt: string;
	author: any;
	slug: string | number;
};

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug
}: PostPreviewProps) {
	return (
		<div className='font-polished'>
			<div className='mb-2'>
				<CoverImage title={title} coverImage={coverImage} slug={slug} />
			</div>
			<h3 className='text-3xl mb-2 leading-snug'>
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a
						className='hover:underline text-4xl font-semibold'
						dangerouslySetInnerHTML={{ __html: title }}
					></a>
				</Link>
			</h3>
			<div className='text-lg mb-2'>
				<Date dateString={date} />
			</div>
			<div
				className='text-3xl leading-relaxed mb-2 text-center justify-center'
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
			<Avatar author={author} date={date} />
		</div>
	);
}
