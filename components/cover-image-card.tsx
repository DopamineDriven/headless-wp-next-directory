import cn from 'classnames';
import Link from 'next/link';

export type CoverImageProps = {
	title: string;
	coverImage: { sourceUrl: string } | any;
	slug: string | number;
};

export default function CoverImageCard({
	title,
	coverImage,
	slug
}: CoverImageProps) {
	const image = (
		<img
			src={coverImage ? coverImage.sourceUrl : coverImage}
			alt={title}
			className={cn('shadow-sm w-full h-40 max-h-full', {
				'hover:shadow-lg transition-shadow duration-400': slug
			})}
		/>
	);
	return (
		<div className='-mx-5 sm:mx-0'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
}
