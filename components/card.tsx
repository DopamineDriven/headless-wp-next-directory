import CoverImage, { CoverImageProps } from './cover-image-card';
import Date from './date';
import Avatar from './avatar';
import Link from 'next/link';
import CardIcons from './card-icons';

type CardProps = {
	coverImage: CoverImageProps;
	title: string;
	slug: string | number;
	date: string;
	author: any;
	excerpt: string;
	social: any;
};

const Card = ({
	author,
	coverImage,
	excerpt,
	date,
	slug,
	social,
	title
}: CardProps) => {
	return (
		<div className='inline-block'>
			<div className='max-w-xs rounded overflow-hidden bg-white shadow-lg my-4 inline-block justify-center'>
				<CoverImage coverImage={coverImage} title={title} slug={slug} />

				<div className='flex flex-col items-center text-center justify-center bg-white px-4 pt-2 shadow rounded-lg'>
					<div className='grid-cols-1'>
						<Avatar author={author} />
					</div>
					<hr className='border-accent-2 my-6 w-full' />
					<h2 className='font-bold text-xl overflow-y h-16'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a
								className='hover:underline text-xl font-semibold text-center justify-center'
								dangerouslySetInnerHTML={{ __html: title }}
							></a>
						</Link>
					</h2>
					<h6
						className='text-sm text-center leading-tight overflow-y h-16 w-full'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></h6>
					<p className='text-xs text-gray-500 text-center'>
						<Date dateString={date} />
					</p>
					<hr className='border-accent-2 w-full mt-2' />
					<div className="">
						<CardIcons social={social} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
