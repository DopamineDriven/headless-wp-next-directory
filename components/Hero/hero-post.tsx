import { CardAuthor } from '../Card';
import { DatePublished } from '../Date';
import CoverImage, {
	CoverImageProps
} from '../SubPost/sub-post-featured-image';
import Link from 'next/link';
import SiteDivider from '../Divider';
import {
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../../graphql/__generated__/AuthorCardQuery';
import { Fragment } from 'react';
import { AllPosts_posts_edges_node_featuredImage } from '../../graphql/__generated__/AllPosts';

type HeroPostProps = {
	featuredImage: AllPosts_posts_edges_node_featuredImage;
	author: any;
	slug: string | null;
	excerpt: string;
	date: string;
	modified: string;
	title: string;
};

export default function HeroPost({
	title,
	featuredImage,
	date,
	modified,
	excerpt,
	author,
	slug
}: HeroPostProps) {
	return (
		<section>
			<div className='mb-8 md:mb-8 mt-8'>
				{title != null &&
				featuredImage != null &&
				featuredImage.node != null &&
				featuredImage.node.sourceUrl != null &&
				slug != null ? (
					<CoverImage
						title={title}
						featuredImage={featuredImage}
						slug={slug ? slug : '/'}
					/>
				) : null}
			</div>
			<div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-10'>
				<div>
					<h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a
								className='hover:underline text-6xl font-bold'
								dangerouslySetInnerHTML={{ __html: title != null ? title : 'no title' }}
							/>
						</Link>
					</h3>
					<div className='mb-4 md:mb-0 text-xl'>
						<DatePublished dateString={date} />
					</div>
				</div>
				<div>
					<div
						className='text-2xl leading-relaxed mb-4'
						dangerouslySetInnerHTML={{
							__html: excerpt != null ? excerpt : 'no excerpt'
						}}
					/>
					<CardAuthor author={author} modified={modified} />
				</div>
			</div>
			<SiteDivider />
		</section>
	);
}
