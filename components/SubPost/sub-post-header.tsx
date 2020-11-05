import Avatar from './sub-post-author';
import { DatePublished } from '../Date';
import { DateModified } from '../Date';
import CoverImage, { CoverImageProps } from './sub-post-featured-image';
import SubPostTitle from './sub-post-title';
import Categories from '../Categories/categories';
import CardIcons from '../Card/card-icons';
import { AllPosts_posts_edges_node } from '@graphql/__generated__/AllPosts';
import { AllPostsForCategory_categories_edges_node_posts_nodes } from '@graphql/__generated__/AllPostsForCategory';
import {
	AllPostsForCategory,
	AllPostsForCategory_categories_edges
} from '../../graphql/__generated__/AllPostsForCategory';
import { GetPostBySlug_post } from '@graphql/__generated__/GetPostBySlug';

const SubPostHeader = ({
	title,
	featuredImage,
	date,
	modified,
	author,
	categories,
	social,
	slug
}: GetPostBySlug_post) => {
	return (
		<>
			<div className='max-w-screen font-polished'>
				<div className='mb-4 md:mb-4 -mx-5 sm:mx-0'>
					<CoverImage
						title={title ? title : 'title returned null'}
						featuredImage={featuredImage}
						slug={slug}
					/>
				</div>
				<SubPostTitle title={title} />

				<div className='max-w-4xl mx-auto align-middle content-center justified-center text-center'>
					<div className='hidden md:block align-middle content-center text-center justify-center'>
						<Avatar author={author} />
					</div>
					<div className='text-xs font-subpolished'>
						Published&nbsp;
						<DatePublished dateString={date} />
					</div>
					<div className='text-xs font-subpolished'>
						Updated&nbsp;
						<DateModified modifiedString={modified} />
					</div>

					<div className='block md:hidden w-inherit'>
						<Avatar author={author} />
					</div>
					<div className='flex flex-col'>
						<Categories
							categories={categories != null ? categories.nodes : null}
							// category={
							// 	category && category.node && category.node.name
							// 		? category.node.name
							// 		: 'null'
							// }
						/>
					</div>
					{social != null ? <CardIcons social={social ?? social} /> : null}
				</div>

				<hr className='border-customGray w-4xl' />
			</div>
		</>
	);
};

export default SubPostHeader;
