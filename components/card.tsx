import CoverImage, { CoverImageProps } from 'components/card-image';
import Avatar from 'components/card-avatar';
import CardIcons from 'components/card-icons';
// import { authorType, socialType } from 'types/posts';
import CardTitle from 'components/card-title';
import CardExcerpt from 'components/card-excerpt';
import { Fragment } from 'react';
import SiteDivider from 'components/site-divider';
// import { getAllPostsWithSlug_posts_edges_node as PostSlug } from '../graphql/__generated__/getAllPostsWithSlug';
// import {
// 	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
// 	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
// } from '../graphql/__generated__/AuthorCardQuery';
import { AllPostsForCategory_categories_edges_node_posts_nodes } from '../graphql/__generated__/AllPostsForCategory';
import {
	AllPosts_posts_edges_node,
	AllPosts_posts_edges_node_social
} from 'graphql/__generated__/AllPosts';

// interface AuthorPropTypes {
// 	author: AuthorCardQueryUsersNodes;
// }
// interface CardProps extends AuthorPropTypes {
// 	author
// 	featuredImage: any;
// 	title: string;
// 	slug: PostSlug;
// 	modified: string | null;
// 	excerpt?: string | null;
// 	social: socialType | null;
// }

const Card = ({
	__typename,
	content,
	date,
	id,
	author,
	featuredImage,
	excerpt,
	modified,
	slug,
	social,
	title
}: AllPosts_posts_edges_node | AllPostsForCategory_categories_edges_node_posts_nodes ): JSX.Element => {
	//had to add this in because without it _html was erroring out because it is of type string.
	if (!excerpt) {
		excerpt = '';
	}

	return (
		<Fragment>
			<div className='block mx-auto select-none w-full'>
				<div className='block overflow-x-hidden overflow-y-hidden transition-all duration-1000 ease-in-out transform border-collapse border-current max-w-xsCardGridCima w-xsCardGridCima sm:w-aboutImage600 sm:max-w-aboutimage600 sm:overflow-hidden lg:w-aboutImage400 rounded-custom mx-auto'>
					{title != null && slug != null && featuredImage != null ? (
						<CoverImage
							featuredImage={featuredImage.node}
							title={title}
							slug={slug}
						/>
					) : null}
					<div className='flex flex-col justify-center flex-grow h-aboutOffsetPRMobile sm:h-auto text-left bg-primary'>
						{title != null || slug != null ? (
							<CardTitle slug={slug} title={title} />
						) : null}
						<CardExcerpt excerpt={excerpt} />
						<div className='block transition-all duration-1000 transform pl-portfolioDivider font-somaRoman translate-y-portfolio'>
							{author != null ? (
								<Avatar author={author?.node} modified={modified} />
							) : null}
						</div>
						<SiteDivider />
						<div className='block float-right text-right pr-portfolio font-somaRoman'>
							{social != null ? <CardIcons social={social} /> : null}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

// interface CardSlugProps {
// 	title: string;
// }

// const CardSlug = ({ title }: CardSlugProps) => {
// 	return (
// 		<>
// 			<Link as={`/posts/${Card()}`} href='/posts/[slug]'>
// 				<a>
// 				<Card />
// 				</a>
// 			</Link>
// 		</>
// 	);
// };

export default Card;
