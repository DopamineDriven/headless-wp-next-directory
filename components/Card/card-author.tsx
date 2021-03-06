import { FC } from 'react';
import { DateModified } from '../Date';
import { Fragment } from 'react';
import {
	AuthorCardQuery_users as AuthorCardQueryUsers,
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../../graphql/__generated__/AuthorCardQuery';
import { AllPostsForCategory_categories_edges_node_posts_nodes_author } from '@graphql/__generated__/AllPostsForCategory';
import { AllPosts_posts_edges_node_author } from '@graphql/__generated__/AllPosts';
import { AvatarFC, AvatarPropsFC } from './card-avatar';

type AuthorNodeProps = {
	nodes: AuthorCardQueryUsersNodes;
};

interface AuthorNodeFC extends FC<AuthorNodeProps> {}

export const AuthorNodeAbstracted: AuthorNodeFC = props => {
	const { nodes } = props;
	return (
		<div>
			{/* <AvatarFC avatar={nodes && nodes.avatar && nodes.avatar.url ? nodes.avatar.url : nodes.avatar} /> */}
		</div>
	);
};

type AvatarProps = {
	author:
		| AllPosts_posts_edges_node_author
		| AllPostsForCategory_categories_edges_node_posts_nodes_author
		| null;
	modified: string | null;
};

// https://www.apollographql.com/docs/react/development-testing/static-typing/#props

const CardAuthor = ({ author, modified }: AvatarProps): JSX.Element => {
	const nombre = (name: string | null) => {
		name;
		if (!name) {
			name;
			return name;
		}
		name;
		return name;
	};
	// const nombre: string =
	// 	author && author.lastName && author.lastName
	// 		? `${author.firstName} ${author.lastName}`
	// 		: author.name;

	function trim(name: string | null | undefined) {
		name;
		if (name) {
			name;
			return name.trim().toLocaleLowerCase();
		}
		name;
		return name;
	}

	const ImageJsx = (): JSX.Element => {
		return (
			<div className='block float-right col-span-1 text-right align-middle transition-all duration-1000 transform pl-portfolio lg:pl-portfolioDivider'>
				{author != null &&
				author.node != null &&
				author.node.avatar &&
				author.node.avatar?.url ? (
					<img
						src={
							author.node.avatar.url === typeof 'string'
								? author.node.avatar?.url.toString()
								: author.node.avatar.url
						}
						className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
						alt={`avatar for ${author.node.name}`}
					/>
				) : (
					<img
						src={'https://dev-to-uploads.s3.amazonaws.com/i/5pfcju7s49gsqjd987vx.jpg'}
						className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
						alt={`null check avatar for ${nombre}`}
					/>
				)}
			</div>
		);
	};

	const NombreJsx = (): JSX.Element => (
		<div className='block col-span-3 align-top text-customAboutSubMobile sm:text-customS lg:text-customExcerpt'>
			<a className='block w-full text-primary'>
				{author != null && author.node != null
					? author.node.name
					: 'No author listed'}
			</a>
		</div>
	);

	const ColSpanJsx = (): JSX.Element => <div className='col-span-1'></div>;

	const ModifiedJsx = (): JSX.Element => (
		<div className='block float-left col-span-3 text-left align-top text-tertiary'>
			<a className='block w-full transition-all transform -translate-y-portfolioLS lg:-translate-y-portfolio text-customCardDateMobile sm:text-customCardAuthorDate lg:text-customExcerpt'>
				<DateModified modifiedString={modified} />
			</a>
		</div>
	);

	return (
		<Fragment>
			<div className='grid grid-cols-4 overflow-hidden text-left transition-all transform ml-mdmxSocial items-left -translate-x-portfolioLSMobile sm:-translate-x-portfolio pt-portfolioDivider text-customCardAuthorDate'>
				<ImageJsx />
				<NombreJsx />
				<ColSpanJsx />
				<ModifiedJsx />
			</div>
		</Fragment>
	);
};

export default CardAuthor;

// interface AvatarProps {
// 	author: authorProps;
// 	modified: string;
// 	// avatar: Author_users_edges_node_avatar;
// }

// const Avatar = ({ author, modified }: AvatarProps): JSX.Element => {
// 	const nombre: string =
// 		author.firstName && author.lastName
// 			? `${author.firstName} ${author.lastName}`
// 			: author.name;
// 	const ImageJsx = (): JSX.Element => (
// 		<div className='block float-right col-span-1 text-right align-middle transition-all duration-1000 transform pl-portfolio lg:pl-portfolioDivider'>
// 			<img
// 				src={author.avatar.url}
// 				className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
// 				alt={`avatar for ${nombre}`}
// 			/>
// 		</div>
// 	);

// 	const NombreJsx = (): JSX.Element => (
// 		<div className='block col-span-3 align-top text-customAboutSubMobile sm:text-customS lg:text-customExcerpt'>
// 			<a className='block w-full'>{nombre}</a>
// 		</div>
// 	);

// 	const ColSpanJsx = (): JSX.Element => <div className='col-span-1'></div>;

// 	const ModifiedJsx = (): JSX.Element => (
// 		<div className='block float-left col-span-3 text-left align-top text-tertiary'>
// 			<a className='block w-full transition-all transform -translate-y-portfolioLS lg:-translate-y-portfolio text-customCardDateMobile sm:text-customCardAuthorDate lg:text-customExcerpt'>
// 				<DateModified modifiedString={modified} />
// 			</a>
// 		</div>
// 	);

// 	return (
// 		<Fragment>
// 			<div className='grid grid-cols-4 overflow-hidden text-left transition-all transform ml-mdmxSocial items-left -translate-x-portfolioLSMobile sm:-translate-x-portfolio pt-portfolioDivider text-customCardAuthorDate'>
// 				<ImageJsx />
// 				<NombreJsx />
// 				<ColSpanJsx />
// 				<ModifiedJsx />
// 			</div>
// 		</Fragment>
// 	);
// };

// export default Avatar;
