import cn from 'classnames';
import Link from 'next/link';
import {
	AllPosts_posts_edges_node_featuredImage,
	AllPosts_posts_edges_node_featuredImage_node
} from '@graphql/__generated__/AllPosts';
import Image from 'next/image';

export type CoverImageProps = {
	title: string | null;
	featuredImage: AllPosts_posts_edges_node_featuredImage | null;
	slug: string | null;
};

export default function SubPostFeaturedImage({
	title,
	featuredImage,
	slug
}: CoverImageProps) {
	const ImageReturned = () => {
		return featuredImage &&
			featuredImage.node &&
			featuredImage.node.sourceUrl &&
			featuredImage.node.sourceUrl ? (
			<img
				src={featuredImage ? featuredImage.node.sourceUrl : featuredImage}
				alt={title ? `${title} - webp image` : 'this is new'}
				className={cn(
					'shadow-small justify-center align-middle content-center text-center items-center',
					{
						'hover:shadow-lg transition-shadow duration-400 justify-center align-middle items-center content-center': slug
					}
				)}
			/>
		) : featuredImage != null && featuredImage.node != null && title != null ? (
			<img
				src={`${featuredImage ? featuredImage.node.sourceUrl : featuredImage}`}
				alt={title}
				className={cn(
					'shadow-small justify-center align-middle content-center text-center items-center',
					{
						'hover:shadow-lg transition-shadow duration-400 justify-center align-middle items-center content-center': slug
					}
				)}
			/>
		) : null;
	};
	return (
		<div className='sm:mx-0 flex align-middle content-center justify-center text-center'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title ? title : 'aria label for title'}>
						<ImageReturned />
					</a>
				</Link>
			) : (
				<ImageReturned />
			)}
		</div>
	);
}
