import Card from './card';
import Link from 'next/link';
type NodeProps = {
	node: any;
};

type CardsProps = {
	posts: any;
};

export default function MoreCards({ posts }: CardsProps) {
	return (
		<section>
			{/* <h2 className='mb-8 text-6xl md:text-6xl tracking-tighter leading-tight'>
				More Companies
			</h2> */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-gap-8 row-gap-6 align-middle text-center'>
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

// export default function MoreCards({ posts, slug }: CardsProps) {
// 	return (
// 		<section>
// 			{/* <h2 className='mb-8 text-6xl md:text-6xl tracking-tighter leading-tight'>
// 				More Companies
// 			</h2> */}
// 			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-gap-8 row-gap-6 align-middle text-center'>
// 				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
// 					<a>
// 						{posts.map(({ node }: NodeProps) => (
// 							<Card
// 								key={node.slug}
// 								title={node.title}
// 								coverImage={node.featuredImage.node}
// 								date={node.date}
// 								social={node.social}
// 								author={node.author.node}
// 								slug={node.slug}
// 								excerpt={node.excerpt}
// 							/>
// 						))}
// 					</a>
// 				</Link>
// 			</div>
// 		</section>
// 	);
// }
