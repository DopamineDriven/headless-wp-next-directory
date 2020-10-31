import Avatar from './post-avatar';
import { DatePublished } from './Date';
import { DateModified } from './Date';
import CoverImage, { CoverImageProps } from './post-cover-image';
import PostTitle from './post-title';
import Categories from './Categories/categories';
import CardIcons from './card/card-icons';

type PostHeaderProps = {
	title: string;
	featuredImage: CoverImageProps;
	author: any;
	date: string;
	modified: string;
	categories: any;
	slug: string | number;
	social: any;
};

export default function PostHeader({
	title,
	featuredImage,
	date,
	modified,
	author,
	categories,
	social,
	slug
}: PostHeaderProps) {
	return (
		<>
			<div className='max-w-screen font-polished'>
				<div className='mb-4 md:mb-4 -mx-5 sm:mx-0'>
					<CoverImage
						title={featuredImage?.title}
						featuredImage={featuredImage}
						slug={slug}
					/>
				</div>
				<PostTitle>{title}</PostTitle>

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
						<Categories categories={categories} category={categories} />
					</div>
					<CardIcons social={social} />
				</div>

				<hr className='border-customGray w-4xl' />
			</div>
		</>
	);
}
