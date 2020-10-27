import PostPreview from './post-preview';
import {
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../graphql/__generated__/AuthorCardQuery';

type NodeProps = {
	node: any;
};

type MoreStoriesProps = {
	posts: any;
};

export default function MoreStories({ posts }: MoreStoriesProps) {
	return (
		<section>
			<h2 className='mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight'>
				More Posts
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 align-middle content-center'>
				{posts.map(({ node }: NodeProps) => (
					<PostPreview
						key={node.slug}
						title={node.title}
						coverImage={node.featuredImage.node}
						modified={node.modified}
						date={node.date}
						author={node.author.node}
						slug={node.slug}
						excerpt={node.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
