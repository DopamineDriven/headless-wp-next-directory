import Card from './card';
import { PostsProps } from '../types/posts';

type NodeProps = {
	node: any;
};

type CardsProps = {
	posts: PostsProps[];
};

export default function MoreCards({ posts }: CardsProps) {
	return (
		<section>
			{/* <h2 className='mb-8 text-6xl leading-tight tracking-tighter md:text-6xl'>
				More Companies
			</h2> */}
			<div className='grid grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-portfolio gap-y-portfolio sm:max-w-cardGridMobile max-w-cardGrid'>
				{posts.map((company: PostsProps) => {
					const node: any = company.node;
					return (
						<Card
							key={node.slug}
							title={node.title}
							coverImage={node.featuredImage.node}
							modified={node.modified}
							social={node.social}
							author={node.author}
							slug={node.slug}
							excerpt={node.excerpt}
						/>
					);
				})}
			</div>
		</section>
	);
}

// export default function MoreCards({ posts, slug }: CardsProps) {
// 	return (
// 		<section>
// 			{/* <h2 className='mb-8 text-6xl leading-tight tracking-tighter md:text-6xl'>
// 				More Companies
// 			</h2> */}
// 			<div className='grid grid-cols-1 text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6'>
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
