import cn from 'classnames';
import Link from 'next/link';
import { getAllPostsWithSlug_posts_edges_node as PostSlug } from '@graphql/__generated__/getAllPostsWithSlug';
import Image from 'next/image';
import { PostsByIdReturnImageSlug_posts_nodes_featuredImage } from '@graphql/__generated__/PostsByIdReturnImageSlug';
import {
	AllPosts_posts_edges_node_featuredImage,
	AllPosts_posts_edges_node_featuredImage_node
} from '@graphql/__generated__/AllPosts';

export type CoverImageProps = {
	title: string | null;
	featuredImage: AllPosts_posts_edges_node_featuredImage | null;
	slug: string | null;
};

const CoverImageCard = ({ title, featuredImage, slug }: CoverImageProps) => {
	const ImageReturned = () => {
		// console.debug( featuredImage?.node.sourceUrl);
		// featuredImage ==! undefined && featuredImage?.node && featuredImage.node?.sourceUrl ?
		return featuredImage &&
			featuredImage.node &&
			featuredImage.node.sourceUrl &&
			featuredImage.node.sourceUrl ? (
			<Image
				src={`${featuredImage ? featuredImage.node.sourceUrl : featuredImage}`}
				alt={title + ' this is new'}
				aria-label='Yeah'
				className={cn(
					'w-xsCardGridCima max-w-xsCardGridCima sm:w-aboutImage600 sm:max-w-aboutImage600 h-aboutOffsetPRMobile sm:h-portfolioS sm:max-h-full xl:h-imagePortfolio lg:h-paddingBlog rounded-t-custom overflow-x-hidden lg:w-aboutImage400 lg:max-w-aboutImage400',
					{
						'transition-shadow duration-1000': slug
					}
				)}
				unsized={true}
				loading='lazy'
				quality={100}
			/>
		) : featuredImage != null && featuredImage.node != null && title != null ? (
			<img
				src={`${featuredImage ? featuredImage.node.sourceUrl : featuredImage}`}
				alt={title}
				className={cn(
					'w-xsCardGridCima max-w-xsCardGridCima sm:w-aboutImage600 sm:max-w-aboutImage600 h-aboutOffsetPRMobile sm:h-portfolioS sm:max-h-full xl:h-imagePortfolio lg:h-paddingBlog rounded-t-custom overflow-x-hidden lg:w-aboutImage400 lg:max-w-aboutImage400',
					{
						'transition-shadow duration-1000': slug
					}
				)}
			/>
		) : null;
	};

	return (
		<div className=''>
			{slug ? (
				<Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
					<a aria-label={title != null ? title : slug}>
						<ImageReturned />
					</a>
				</Link>
			) : (
				<ImageReturned />
			)}
		</div>
	);
};

export default CoverImageCard;
