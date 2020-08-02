import Avatar from './avatar';
import DateFormater from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import Author from '../types/author';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
	categories: any;
};

const PostHeader = ({ title, coverImage, date, author, categories }: Props) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className='hidden md:block md:mb-12'>
				<Avatar author={author} />
			</div>
			<div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='block md:hidden mb-6'>
					<Avatar author={author} />
				</div>
				<div className='mb-6 text-lg'>
					Posted&nbsp;
					<DateFormater dateString={date} />
					<Categories categories={categories} />
				</div>
			</div>
		</>
	);
};

export default PostHeader;
