import Card from 'components/card';
import { PostsProps } from 'types/posts';
import {
	AllPostsForCategory_categories_edges_node_posts,
	AllPostsForCategory_categories_edges_node_posts_nodes
} from '../graphql/__generated__/AllPostsForCategory';
import {
	AllPosts_posts_edges,
	AllPosts_posts_edges_node
} from '../graphql/__generated__/AllPosts';
type NodeProps = {
	node: any;
};

type CardsProps = {
	posts: AllPosts_posts_edges[];
};

type Required<T extends CardsProps> = {
	[CardProps in keyof T]-?: T[CardProps];
};

type HasSelect<T extends CardsProps> = {};

export default function CardsCoalesced({ posts }: Required<CardsProps>) {
	return (
		<section className='content-center justify-center block mx-auto '>
			<div className='grid content-center justify-center grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-portfolio gap-y-portfolioPadding sm:max-w-cardGridMobile max-w-cardGrid'>
				{posts.map((company: AllPosts_posts_edges) => {
					if (company.node != null) {
						return (
							<Card
								__typename={company.node.__typename}
								content={company.node.content}
								date={company.node.date}
								id={company.node.id}
								key={company.node.slug}
								title={company.node.title}
								featuredImage={
									company.node.featuredImage != null ? company.node.featuredImage : null
								}
								modified={company.node.modified}
								social={company.node.social}
								author={company.node.author}
								slug={company.node.slug}
								excerpt={company.node.excerpt}
							/>
						);
					} else {
						return <p>No company card data avaialable</p>;
					}
				})}
			</div>
		</section>
	);
}

// import Card from 'components/card';
// import { PostsProps } from 'types/posts';
// import { AllPosts } from 'graphql/custom-types/get-all-posts';
// import { AllPosts_posts_edges, AllPosts_posts } from '../graphql/custom-types/get-all-posts';

// type NodeProps = {
// 	node: any;
// };

// type CardsProps = {
// 	posts: PostsProps[];
// };

// type Required<T> = {
// 	[P in keyof T]-?: T[P];
// };

// export default function CardsCoalesced({ posts }: Required<AllPosts[]>) {
// 	return (
// 		<section className='content-center justify-center block mx-auto '>
// 			<div className='grid content-center justify-center grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-portfolio gap-y-portfolioPadding sm:max-w-cardGridMobile max-w-cardGrid'>
// 				{posts.map((company: Required<AllPosts[]>) => {
// 					let node: Required<AllPosts_posts_edges>;
// 					return (
// 						<Card
// 							key={company.__typename}
// 							title={company.node.title}
// 							featuredImage={company.node.featuredImage.node.sourceUrl}
// 							modified={company.node.modified}
// 							social={company.node.social}
// 							author={company.node.author}
// 							slug={company.node.slug}
// 							excerpt={company.node.excerpt}
// 						/>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// }
