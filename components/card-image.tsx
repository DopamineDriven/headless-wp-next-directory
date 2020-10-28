import cn from 'classnames';
import Link from 'next/link';
import { getAllPostsWithSlug_posts_edges_node as PostSlug } from '../graphql/__generated__/getAllPostsWithSlug';
import Image from 'next/image';

export type CoverImageProps = {
	title: string;
	coverImage: any;
	slug: PostSlug;
};

const CoverImageCard = ({ title, coverImage, slug }: CoverImageProps) => {
	const ImageReturned = () => {
		return (
			<Image
				src={coverImage ? coverImage.node?.sourceUrl : coverImage}
				alt={title}
				className={cn(
					'w-xsCardGridCima max-w-xsCardGridCima sm:w-aboutImage600 sm:max-w-aboutImage600 h-aboutOffsetPRMobile sm:h-portfolioS sm:max-h-full xl:h-imagePortfolio lg:h-paddingBlog rounded-t-custom overflow-x-hidden lg:w-aboutImage400 lg:max-w-aboutImage400',
					{
						'transition-shadow duration-1000': slug
					}
				)}
				unsized={true}
				loading='lazy'
			/>
		);
	};
	return (
		<div className=''>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>
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
