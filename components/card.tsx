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
		<div className='inline-block ml-5'>
			<div className='max-w-xs rounded overflow-hidden shadow-lg my-4 inline-block mx-2 justify-center'>
				<CoverImage coverImage={coverImage} title={title} slug={slug} />

				<div className='flex flex-col items-center justify-center bg-white px-4 pt-2 shadow rounded-lg'>
					<div className='grid-cols-1'>
						<Avatar author={author} />
					</div>
					<hr className='border-accent-2 my-6 w-full' />
					<h2 className='font-bold text-xl'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a
								className='hover:underline text-xl font-semibold'
								dangerouslySetInnerHTML={{ __html: title }}
							></a>
						</Link>
					</h2>
					<h6
						className='mt-2 text-sm text-center overflow-y h-20 w-full'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></h6>

					<p className='text-xs text-gray-500 text-center mt-3'>
						<Date dateString={date} />
					</p>
					<hr className='border-accent-2 w-full mt-8' />
					<CardIcons social={social} />
				</div>
			</div>
		</div>
	);
};

export default Card;
