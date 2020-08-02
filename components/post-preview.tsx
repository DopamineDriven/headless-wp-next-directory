import Avatar from './avatar';
import DateFormater from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string | number;
	author: Author;
};

const PostPreview = ({
	title,
	coverImage,
	date,
	excerpt,
	slug,
	author
}: Props) => {
	return (
		<div>
			<div className='mb-5'>
				<CoverImage slug={slug} title={title} src={coverImage} />
			</div>
			<h3 className='text-3xl mb-3 leading-snug'>
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a
						className='hover:underline'
						dangerouslySetInnerHTML={{ __html: title }}
					></a>
				</Link>
			</h3>
			<div className='text-lg mb-4'>
				<DateFormater dateString={date} />
			</div>
			<div
				className='text-lg leading-relaxed mb-4'
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
			<Avatar author={author} />
		</div>
	);
};

export default PostPreview;
