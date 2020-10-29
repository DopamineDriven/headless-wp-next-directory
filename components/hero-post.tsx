import Avatar from './card-avatar';
import Date from './date-published';
import CoverImage, { CoverImageProps } from './post-cover-image';
import Link from 'next/link';
import SectionSeparator from './section-separator';
import {
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../graphql/__generated__/AuthorCardQuery';
import { AllPosts_posts_edges_node } from 'graphql/__generated__/AllPosts';

// type HeroPostProps = {
// 	featuredImage: CoverImageProps;
// 	author: AuthorCardQueryUsersNodes;
// 	slug: string | number;
// 	excerpt: string;
// 	date: string;
// 	modified: string;
// 	title: string;
// };

export default function HeroPost({
	title,
	featuredImage,
	date,
	modified,
	excerpt,
	author,
	slug
}: AllPosts_posts_edges_node) {
	return (
		<section>
			<div className='mb-8 md:mb-8 mt-8'>
				{title != null && featuredImage != null && slug != null ? (
					<CoverImage title={title} featuredImage={featuredImage} slug={slug} />
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
						<Date dateString={date} />
					</div>
				</div>
				<div>
					<div
						className='text-2xl leading-relaxed mb-4'
						dangerouslySetInnerHTML={{
							__html: excerpt != null ? excerpt : 'no excerpt'
						}}
					/>
					{author != null ? (
						<Avatar author={author.node} modified={modified} />
					) : null}
				</div>
			</div>
			<SectionSeparator />
		</section>
	);
}
