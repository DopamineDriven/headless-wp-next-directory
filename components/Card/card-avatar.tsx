import { FC } from 'react';

import {
	AuthorCardQuery_users as AuthorCardQueryUsers,
	AuthorCardQuery_users_nodes as AuthorCardQueryUsersNodes,
	AuthorCardQuery_users_nodes_avatar as AuthorCardQueryUsersNodesAvatar
} from '../../graphql/__generated__/AuthorCardQuery';

interface AvatarProps {
	avatar: { url: string | null } | null;
}

export interface AvatarPropsFC extends FC<AvatarProps> {}

export const AvatarFC: AvatarPropsFC = props => {
	const { avatar } = props;
	return (
		<div className='block float-right col-span-1 text-right align-middle transition-all duration-1000 transform pl-portfolio lg:pl-portfolioDivider'>
			{avatar ? (
				<img
					src={avatar && avatar.url ? avatar.url : 'avatar'}
					className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
					alt={`avatar for guy`}
				/>
			) : (
				<img
					src={'https://dev-to-uploads.s3.amazonaws.com/i/5pfcju7s49gsqjd987vx.jpg'}
					className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
					alt={`null check avatar for`}
				/>
			)}
		</div>
	);
};

export interface AuthorGeneratedProps {
	author: AvatarProps;
}

const AuthorAvatar = ({ author }: AuthorGeneratedProps) => {
	return (
		<div className='block float-right col-span-1 text-right align-middle transition-all duration-1000 transform pl-portfolio lg:pl-portfolioDivider'>
			{author !== null && author.avatar !== null && author.avatar.url !== null ? (
				<img
					src={author.avatar.url}
					className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
					alt={`avatar for guy`}
				/>
			) : (
				<img
					src={'https://dev-to-uploads.s3.amazonaws.com/i/5pfcju7s49gsqjd987vx.jpg'}
					className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
					alt={`null check avatar for`}
				/>
			)}
		</div>
	);
};

export default AuthorAvatar;
