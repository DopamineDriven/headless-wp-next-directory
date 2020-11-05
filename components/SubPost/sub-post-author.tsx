import SiteDivider from '../Divider';
import { AllPostsForCategory_categories_edges_node_posts_nodes_author } from '@graphql/__generated__/AllPostsForCategory';
import { AllPosts_posts_edges_node_author } from '@graphql/__generated__/AllPosts';
import { GetPostBySlug_post_author } from '@graphql/__generated__/GetPostBySlug';

type AvatarProps = {
	author:
		| AllPosts_posts_edges_node_author
		| GetPostBySlug_post_author
		| AllPostsForCategory_categories_edges_node_posts_nodes_author
		| null;
};

export default function SubPostAuthor({ author }: AvatarProps) {
	const nombre = (name: string | null) => {
		name;
		if (!name) {
			name;
			return name;
		}
		name;
		return name;
	};

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

	return (
		<>
			<div className='flex w-full items-center text-center align-middle justify-center rounded-full overflow-hidden'>
				<ImageJsx />
			</div>
			<div className='flex text-md font-semibold w-full items-center text-center align-middle justify-center'>
				<NombreJsx />
			</div>
		</>
	);
}

/*
	<div className='flex w-full items-center text-center align-middle justify-center rounded-full overflow-hidden'>
				<div>
					<img
						src={author.avatar.url}
						className='h-20 w-20 rounded-full border-tinyHouseWhite border-collapse border-opacity-50 border-4'
						alt={nombre}
					/>
				</div>
			</div>
			<div className='flex text-md font-semibold w-full items-center text-center align-middle justify-center'>
				<h2>{nombre}</h2>
			</div>
*/
