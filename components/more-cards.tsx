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
			<div className='grid grid-cols-3 align-middle content-center'>
				{posts.map(({ node }: any) => (
					<Card
						key={node.slug}
						title={node.title}
						coverImage={node.featuredImage?.node}
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
