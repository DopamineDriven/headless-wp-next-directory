import Avatar from './avatar-sub';
import Date from './date';
import CoverImage, { CoverImageProps } from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import CardIcons from './card-icons';

type PostHeaderProps = {
	title: string;
	coverImage: CoverImageProps;
	author: any;
	date: string;
	categories: any;
	slug: string | number;
	social: any;
};

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	categories,
	social,
	slug
}: PostHeaderProps) {
	return (
		<>
			<div className='max-w-screen font-polished'>
				<PostTitle>{title}</PostTitle>
				<div className='mb-4 md:mb-4 -mx-5 sm:mx-0'>
					<CoverImage
						title={coverImage?.title}
						coverImage={coverImage}
						slug={slug}
					/>
				</div>
				<div className='hidden md:block align-middle content-center text-center justify-center'>
					<Avatar author={author} />
				</div>

				<div className='max-w-4xl mx-auto align-middle content-center justified-center text-center'>
					<CardIcons social={social} />
					<div className='block md:hidden w-inherit'>
						<Avatar author={author} />
					</div>
					<div className='mb-2 grid-cols-1'>
						<div className='pb-1'>
							<Categories categories={categories} />
						</div>
						<div className='text-sm font-subpolished'>
							<Date dateString={date} />
						</div>
					</div>
				</div>
				<hr className='border-customGray w-4xl' />
			</div>
		</>
	);
}
