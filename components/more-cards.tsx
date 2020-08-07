import Card from './card';

type NodeProps = {
	node: any;
};

type CardsProps = {
	posts: any;
};

export default function MoreCards({ posts }: CardsProps) {
	return (
		<section>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 align-middle content-center'>
				{posts.map(({ node }: NodeProps) => (
					<Card
						key={node.slug}
						title={node.title}
						coverImage={node.featuredImage.node}
						date={node.date}
						social={node.social}
						author={node.author.node}
						slug={node.slug}
						excerpt={node.excerpt}
					/>
				))}
			</div>
		</section>
	);
}
