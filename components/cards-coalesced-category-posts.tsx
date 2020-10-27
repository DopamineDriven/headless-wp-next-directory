import Card from 'components/card';
import {
	AllPostsForCategory_categories_edges_node_posts,
	AllPostsForCategory_categories_edges_node_posts_nodes
} from '../graphql/__generated__/AllPostsForCategory';

type CardsProps = {
	posts: (AllPostsForCategory_categories_edges_node_posts_nodes | null)[];
};

type Required<T extends CardsProps> = {
	[CardProps in keyof T]-?: T[CardProps];
};

type HasSelect<T extends CardsProps> = {};

export default function CardsCoalescedCategoryPosts({
	posts
}: Required<CardsProps>) {
	return (
		<section className='content-center justify-center block mx-auto '>
			<div className='grid content-center justify-center grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-portfolio gap-y-portfolioPadding sm:max-w-cardGridMobile max-w-cardGrid'>
				{posts.map(
					(
						company: AllPostsForCategory_categories_edges_node_posts_nodes | null
					) => {
						if (company != null) {
							return (
								<Card
									key={company.slug}
									title={company.title}
									coverImage={company.featuredImage}
									modified={company.modified}
									social={company.social}
									author={company.author}
									slug={company.slug}
									excerpt={company.excerpt}
								/>
							);
						} else {
							throw new Error('No company Data');
						}
					}
				)}
			</div>
		</section>
	);
}
