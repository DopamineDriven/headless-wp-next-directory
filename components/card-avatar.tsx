import Modified from 'components/date-modified';
import { authorProps } from 'types/posts';
import { Fragment } from 'react';
import {
	AuthorCardQuery_users as AuthorCardQueryUsers,
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../graphql/__generated__/AuthorCardQuery';

interface AuthorArray {
	authors: AuthorCardQueryUsers;
}

interface AvatarURL {
	avatar: AuthorCardQueryUsersNodesAvatar;
}
interface AvatarProps {
	author: AuthorCardQueryUsersNodes;
	modified: string;
}

// https://www.apollographql.com/docs/react/development-testing/static-typing/#props

const Avatar = ({ author, modified }: AvatarProps): JSX.Element => {
	const nombre: string | null =
		author.firstName !== null && author.lastName !== null
			? `${author.firstName} ${author.lastName}`
			: author.name;

	const ImageJsx = (): JSX.Element => {
		return (
			<div className='block float-right col-span-1 text-right align-middle transition-all duration-1000 transform pl-portfolio lg:pl-portfolioDivider'>
				{author != null && author.avatar != null && author.avatar.url != null ? (
					<img
						src={author.avatar.url}
						className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
						alt={`avatar for ${author.name}`}
					/>
				) : (
					<img
						src={'https://dev-to-uploads.s3.amazonaws.com/i/5pfcju7s49gsqjd987vx.jpg'}
						className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
						alt={`null check avatar for ${author.name}`}
					/>
				)}
			</div>
		);
	};

	const NombreJsx = (): JSX.Element => (
		<div className='block col-span-3 align-top text-customAboutSubMobile sm:text-customS lg:text-customExcerpt'>
			<a className='block w-full'>
				{author != null && author.name != null ? author.name : nombre}
			</a>
		</div>
	);

	const ColSpanJsx = (): JSX.Element => <div className='col-span-1'></div>;

	const ModifiedJsx = (): JSX.Element => (
		<div className='block float-left col-span-3 text-left align-top text-tertiary'>
			<a className='block w-full transition-all transform -translate-y-portfolioLS lg:-translate-y-portfolio text-customCardDateMobile sm:text-customCardAuthorDate lg:text-customExcerpt'>
				<Modified modifiedString={modified} />
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

export default Avatar;

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
// 				<Modified modifiedString={modified} />
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
