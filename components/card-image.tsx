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
			className={cn('w-imagePortfolioMobile max-w-imagePortfolioMobile md:w-aboutImage500 md:max-w-imagePortfolio h-auto max-h-aboutImage300 md:h-portfolioS md:max-h-full', {
				'transition-shadow duration-400': slug
			})}
		/>
	);
	return (
		<div className=''>
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
