import Avatar from './sub-post-author';
import { DatePublished } from '../Date';
import { DateModified } from '../Date';
import CoverImage, { CoverImageProps } from './sub-post-featured-image';
import SubPostTitle from './sub-post-title';
import Categories from '../Categories/categories';
import CardIcons from '../Card/card-icons';
import { AllPosts_posts_edges_node } from '@graphql/__generated__/AllPosts';
import { AllPostsForCategory_categories } from '@graphql/__generated__/AllPostsForCategory';

import {
	GetPostBySlug,
	GetPostBySlugVariables,
	GetPostBySlug_post
} from '@graphql/__generated__/GetPostBySlug';
import { useQuery } from '@apollo/client';
import GET_POST_BY_SLUG from '@graphql/api-post-by-slug';
import { NextRouter, useRouter } from 'next/router';
import { Fragment } from 'react';

const SubPostHeader = () => {
	const router: NextRouter = useRouter();
	let { slug } = router.query;

	if (typeof slug === 'string') {
		console.log('slug is a string');
		slug = slug;
	} else {
		slug = '';
	}

	const { data: postData, error } = useQuery<
		GetPostBySlug,
		GetPostBySlugVariables
	>(GET_POST_BY_SLUG, {
		variables: { slug: slug },
		notifyOnNetworkStatusChange: true
	});

	console.log('graphql error: ', error);
	return (
		<Fragment>
			<div className='max-w-screen font-polished'>
				{postData ? (
					<Fragment>
						<div className='mb-4 md:mb-4 -mx-5 sm:mx-0'>
							<CoverImage
								title={
									postData.post != null ? postData.post.title : 'title returned null'
								}
								featuredImage={
									postData.post != null ? postData.post.featuredImage : null
								}
								slug={slug}
							/>
						</div>
						<SubPostTitle
							title={
								postData.post != null ? postData.post.title : 'title returned null'
							}
						/>

						<div className='max-w-4xl mx-auto align-middle content-center justified-center text-center'>
							<div className='hidden md:block align-middle content-center text-center justify-center'>
								<Avatar author={postData.post != null ? postData.post.author : null} />
							</div>
							<div className='text-xs font-subpolished'>
								Published&nbsp;
								<DatePublished
									dateString={
										postData.post != null ? postData.post.date : 'date returned null'
									}
								/>
							</div>
							<div className='text-xs font-subpolished'>
								Updated&nbsp;
								<DateModified
									modifiedString={
										postData.post != null
											? postData.post.modified
											: 'modified returned null'
									}
								/>
							</div>

							<div className='block md:hidden w-inherit'>
								<Avatar author={postData.post != null ? postData.post.author : null} />
							</div>
							<div className='flex flex-col'>
								<Categories
									categories={
										postData.post != null && postData.post.categories != null
											? postData.post.categories.edges
											: null
									}
									// category={
									// 	category && category.node && category.node.name
									// 		? category.node.name
									// 		: 'null'
									// }
								/>
							</div>
							{postData.post != null && postData.post.social != null ? (
								<CardIcons social={postData.post.social ?? postData.post.social} />
							) : null}
						</div>

						<hr className='border-customGray w-4xl' />
					</Fragment>
				) : (
					<p>No data available for this post</p>
				)}
			</div>
		</Fragment>
	);
};

export default SubPostHeader;
