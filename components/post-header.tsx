import Avatar from './avatar';
import Date from './date';
import CoverImage, { CoverImageProps } from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';

type PostHeaderProps = {
	title: string;
	coverImage: CoverImageProps;
	author: any;
	date: string;
	categories: any;
	slug: string | number;
};

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	categories,
	slug
}: PostHeaderProps) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className='hidden md:block md:mb-6'>
				<Avatar author={author} />
			</div>
			<div className='mb-8 md:mb-4 -mx-5 sm:mx-0'>
				<CoverImage
					title={coverImage.title}
					coverImage={coverImage}
					slug={slug}
				/>
			</div>
			<div className='max-w-2xl mx-auto align-middle content-center justified-center text-center'>
				<div className='block md:hidden mb-6'>
					<Avatar author={author} />
				</div>
				<div className='mb-6 text-2xl'>
					Posted <Date dateString={date} />
					<Categories categories={categories} />
				</div>
			</div>
		</>
	);
}
