import cn from 'classnames';
import Link from 'next/link';

interface Props {
	title: string;
	src: string;
	slug?: string;
}

const CoverImage = ({ title, src, slug }: Props) => {
	const image = (
		<img
			src={src}
			alt={`cover image for ${title}`}
			className={cn(' shadow-sm', {
				'hover:shadow-md transition-shadow duration-500': slug
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
};

export default CoverImage;

// image vs img tags https://stackoverflow.com/questions/11928566/img-vs-image-tag-in-html
