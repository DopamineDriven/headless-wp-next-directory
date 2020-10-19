import cn from 'classnames';
import Link from 'next/link';
import { getAllPostsWithSlug_posts_edges_node as PostSlug } from '../graphql/__generated__/getAllPostsWithSlug';

export type CoverImageProps = {
	title: string;
	coverImage: { sourceUrl: string } | any;
	slug: PostSlug;
};

const CoverImageCard = ({
	title,
	coverImage,
	slug
}: CoverImageProps): JSX.Element => {
	const Image = (): JSX.Element => (
		<img
			src={coverImage ? coverImage.sourceUrl : coverImage}
			alt={title}
			className={cn(
				'w-xsCardGridCima max-w-xsCardGridCima sm:w-aboutImage600 sm:max-w-aboutImage600 h-aboutOffsetPRMobile sm:h-portfolioS sm:max-h-full rounded-t-custom overflow-x-hidden',
				{
					'transition-shadow duration-400': slug
				}
			)}
		/>
	);
	return (
		<div className=''>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>
						<Image />
					</a>
				</Link>
			) : (
				<Image />
			)}
		</div>
	);
};

export default CoverImageCard;
