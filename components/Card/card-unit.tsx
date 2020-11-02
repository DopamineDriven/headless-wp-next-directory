import CoverImage, {
	CoverImageProps
} from '@components/Card/card-featured-image';
import CardAuthor from '@components/Card/card-author';
import CardIcons from '@components/Card/card-icons';
import { authorType, socialType } from 'types/posts';
import CardExcerptFC from './card-excerpt';
import { Fragment } from 'react';
import SiteDivider from 'components/Core/site-divider';
import { getAllPostsWithSlug_posts_edges_node as PostSlug } from '../../graphql/__generated__/getAllPostsWithSlug';
import CardTitleFC from './card-title';
import {
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../../graphql/__generated__/AuthorCardQuery';

interface AuthorPropTypes {
	author: any;
}
interface CardProps extends AuthorPropTypes {
	featuredImage: any;
	title: string;
	slug: string | null;
	modified: string;
	excerpt: string;
	social: socialType;
}

const Card = ({
	author,
	featuredImage,
	excerpt,
	modified,
	slug,
	social,
	title
}: CardProps): JSX.Element => {
	return (
		<Fragment>
			<div className='block mx-auto select-none w-full'>
				<div className='block overflow-x-hidden overflow-y-hidden transition-all duration-1000 ease-in-out transform border-collapse border-current max-w-xsCardGridCima w-xsCardGridCima sm:w-aboutImage600 sm:max-w-aboutimage600 sm:overflow-hidden lg:w-aboutImage400 rounded-custom mx-auto'>
					<CoverImage featuredImage={featuredImage} title={title} slug={slug} />
					<div className='flex flex-col justify-center flex-grow h-aboutOffsetPRMobile sm:h-auto text-left bg-primary'>
						<CardTitleFC title={title} slug={slug} />
						<CardExcerptFC excerpt={excerpt} />
						<div className='block transition-all duration-1000 transform pl-portfolioDivider font-somaRoman translate-y-portfolio'>
							<CardAuthor author={author} modified={modified} />
						</div>
						<SiteDivider />
						<div className='block float-right text-right pr-portfolio font-somaRoman'>
							<CardIcons social={social} />
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