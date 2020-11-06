import Card from '@components/Card/card-unit';
import { AllPostsForCategory_categories_edges_node_posts_edges } from '@graphql/__generated__/AllPostsForCategory';
import {
	AllPosts_posts_edges,
	AllPosts_posts_edges_node
} from '@graphql/__generated__/AllPosts';
import { Fragment } from 'react';

type CardsProps = {
	posts: (
		| AllPostsForCategory_categories_edges_node_posts_edges
		| AllPosts_posts_edges
	)[];
};

export default function CardsCoalesced({ posts }: CardsProps) {
	return (
		<section className='content-center justify-center block mx-auto '>
			<div className='grid content-center justify-center grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-portfolio gap-y-portfolioPadding sm:max-w-cardGridMobile max-w-cardGrid'>
				{posts.map(
					(
						company:
							| AllPosts_posts_edges
							| AllPostsForCategory_categories_edges_node_posts_edges
							| null,
						index: number
					) => {
						// const companyNode = company != null && company.node != null ?

						return (
							<Fragment>
								{company != null && company.node != null ? (
									<Card
										__typename={company.node.__typename}
										content={company.node.content}
										date={company.node.date}
										id={company.node.id}
										key={company.node.slug}
										title={company.node.title}
										featuredImage={
											company.node.featuredImage != null
												? company.node.featuredImage
												: null
										}
										modified={company.node.modified}
										social={company.node.social}
										author={company.node.author}
										slug={company.node.slug}
										excerpt={company.node.excerpt}
										categories={company.node.categories}
									/>
								) : (
									<div key={index}>
										{' '}
										We're sorry but no data was available for this company
									</div>
								)}
							</Fragment>
						);
					}
				)}
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
