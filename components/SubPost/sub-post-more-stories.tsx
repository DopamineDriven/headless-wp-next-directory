import PostPreview from './sub-post-preview';
import { AllPostsForCategory_categories_edges_node_posts_nodes } from '@graphql/__generated__/AllPostsForCategory';
import { AllPosts_posts_edges_node } from '@graphql/__generated__/AllPosts';

type MoreStories = {
	posts:
		| AllPosts_posts_edges_node[]
		| AllPostsForCategory_categories_edges_node_posts_nodes[];
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
						node:
							| AllPosts_posts_edges_node
							| AllPostsForCategory_categories_edges_node_posts_nodes
					) => {
						return (
							<PostPreview
								__typename={node.__typename}
								content={node.content}
								id={node.id}
								key={node.slug}
								title={node.title}
								featuredImage={node.featuredImage != null ? node.featuredImage : null}
								social={node.social}
								modified={node.modified}
								date={node.date}
								author={node.author}
								slug={node.slug}
								excerpt={node.excerpt}
							/>
						);
					}
				)}
			</div>
		</section>
	);
}
