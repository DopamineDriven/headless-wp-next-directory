import PostPreview from './sub-post-preview';
import { AllPostsForCategory_categories_edges_node_posts_edges } from '@graphql/__generated__/AllPostsForCategory';
import { AllPosts_posts_edges } from '@graphql/__generated__/AllPosts';
import { Fragment } from 'react';

type MoreStories = {
	posts: (
		| AllPosts_posts_edges
		| AllPostsForCategory_categories_edges_node_posts_edges
	)[];
};

export default function SubPostMoreStories({ posts }: MoreStories) {
	return (
		<section>
			<h2 className='mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight'>
				More Posts
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 align-middle content-center'>
				{posts.map(
					(
						company:
							| AllPosts_posts_edges
							| AllPostsForCategory_categories_edges_node_posts_edges,
						index: number
					) => {
						return (
							<Fragment>
								{company != null && company.node != null ? (
									<PostPreview
										__typename={company.node.__typename}
										content={company.node.content}
										id={company.node.id}
										key={company.node.slug}
										title={company.node.title}
										featuredImage={
											company.node.featuredImage != null
												? company.node.featuredImage
												: null
										}
										social={company.node.social}
										modified={company.node.modified}
										date={company.node.date}
										author={company.node.author}
										slug={company.node.slug}
										categories={company.node.categories}
										excerpt={company.node.excerpt}
									/>
								) : (
									<div key={index}>We're sorry there is no info for this company</div>
								)}
							</Fragment>
						);
					}
				)}
			</div>
		</section>
	);
}
