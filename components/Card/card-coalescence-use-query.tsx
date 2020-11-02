import Card from '@components/Card/card-unit';
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { AllPosts_posts_edges } from 'graphql/__generated__/AllPosts';
import {
	OrderEnum,
	PostObjectsConnectionOrderbyEnum
} from '../../types/graphql-global-types';

export const ALL_POSTS_QUERY = gql`
	query AllPosts($field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
		posts(first: 35, where: { orderby: { field: $field, order: $order } }) {
			edges {
				node {
					id
					title
					excerpt
					slug
					date
					modified
					social {
						facebook
						instagram
						twitter
						website
					}
					featuredImage {
						node {
							sourceUrl
						}
					}
					author {
						node {
							name
							firstName
							lastName
							avatar {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export const allPostsQueryVars = {
	field: PostObjectsConnectionOrderbyEnum.MODIFIED,
	order: OrderEnum.DESC
};

export default function PostList() {
	const { loading, error, data, fetchMore, networkStatus } = useQuery(
		ALL_POSTS_QUERY,
		{
			variables: allPostsQueryVars,
			notifyOnNetworkStatusChange: true
		}
	);
	const loadingMorePosts: boolean = networkStatus === NetworkStatus.fetchMore;
	const loadMorePosts = (posts: AllPosts_posts_edges[]) => {
		fetchMore({
			variables: {
				skip: posts.length
			}
		});
	};
	if (error) return <aside>{`${error}`}</aside>;
	if (loading && !loadingMorePosts) return <aside>Loading...</aside>;
	if (networkStatus === NetworkStatus.refetch) {
		loadMorePosts;
		return <aside>Refetching!</aside>;
	}
	const { posts } = data?.posts.nodes;
	return (
		<section className='content-center justify-center block mx-auto '>
			<div className='grid content-center justify-center grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-portfolio gap-y-portfolioPadding sm:max-w-cardGridMobile max-w-cardGrid'>
				{posts.map((company: AllPosts_posts_edges) => {
					const node: any = company.node;
					return (
						<Card
							__typename={node.__typename}
							content={node.content}
							date={node.date}
							id={node.id}
							key={node.slug}
							title={node.title}
							featuredImage={node.featuredImage.node}
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

// type NodeProps = {
// 	node: any;
// };

// type CardsProps = {
// 	posts: PostsProps[];
// };

// export default function MoreCards({ posts }: CardsProps) {
// 	return (
// 		<section className='content-center justify-center block mx-auto '>
// 			<div className='grid content-center justify-center grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-portfolio gap-y-portfolioPadding sm:max-w-cardGridMobile max-w-cardGrid'>
// 				{posts.map((company: PostsProps) => {
// 					const node: any = company.node;
// 					return (
// 						<Card
// 							key={node.slug}
// 							title={node.title}
// 							featuredImage={node.featuredImage.node}
// 							modified={node.modified}
// 							social={node.social}
// 							author={node.author}
// 							slug={node.slug}
// 							excerpt={node.excerpt}
// 						/>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// }

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
// 								featuredImage={node.featuredImage.node}
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

// was archived https://github.com/gregrickaby/nextjs-wordpress
