import PostPreview from './post-preview';

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
			<div className='grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32 align-middle content-center'>
				{posts.map(({ node }: NodeProps) => (
					<PostPreview
						key={node.slug}
						title={node.title}
						coverImage={node.featuredImage.node}
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
