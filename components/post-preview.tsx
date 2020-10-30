import Avatar from './Card/card-avatar';
import Date from './date-published';
import CoverImage, { CoverImageProps } from './post-cover-image';
import Link from 'next/link';
import {
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../graphql/__generated__/AuthorCardQuery';

type PostPreviewProps = {
	featuredImage: CoverImageProps;
	title: string;
	date: string;
	modified: string;
	excerpt: string;
	author: any;
	slug: string | number;
	// avatar: AuthorCardQueryUsersNodes;
};

export default function PostPreview({
	title,
	featuredImage,
	date,
	modified,
	excerpt,
	author,
	slug
}: PostPreviewProps) {
	return (
		<div className='font-polished'>
			<div className='mb-2'>
				<CoverImage title={title} featuredImage={featuredImage} slug={slug} />
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
			<Avatar author={author} modified={modified} />
		</div>
	);
}
