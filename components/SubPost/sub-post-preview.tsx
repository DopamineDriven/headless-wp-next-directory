import { CardAuthor } from '../Card';
import { DatePublished } from '../Date';
import CoverImage, { CoverImageProps } from './sub-post-featured-image';
import Link from 'next/link';
import { AllPostsForCategory_categories_edges_node_posts_edges_node } from '@graphql/__generated__/AllPostsForCategory';
import { CardExcerpt as Excerpt } from '../Card';
import SubPostTitle from './sub-post-title';
import { AllPosts_posts_edges_node } from '@graphql/__generated__/AllPosts';
import { allPostsFields } from '@graphql/__generated__/allPostsFields';
// import {
// 	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
// 	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
// } from '../graphql/__generated__/AuthorCardQuery';

const SubPostPreview = ({
	title,
	featuredImage,
	date,
	modified,
	excerpt,
	author,
	slug,
	categories
}: allPostsFields) => {
	return (
		<div className='font-polished'>
			<div className='mb-2'>
				<CoverImage
					title={title ? title : 'error getting title'}
					featuredImage={featuredImage ?? featuredImage}
					slug={slug}
				/>
			</div>
			<h3 className='text-3xl mb-2 leading-snug'>
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a className='hover:underline text-4xl font-semibold'>
						<SubPostTitle title={title ? title : 'subpost title error'} />
					</a>
				</Link>
			</h3>
			<div className='text-lg mb-2'>
				<DatePublished dateString={date} />
			</div>
			<div className='text-3xl leading-relaxed mb-2 text-center justify-center'>
				<Excerpt excerpt={excerpt ?? excerpt} />
			</div>

			<CardAuthor author={author} modified={modified} />
		</div>
	);
};

export default SubPostPreview;
