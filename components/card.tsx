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
		<div className='inline-block font-polished'>
			<div className='max-w-xs rounded-lg overflow-x-hidden overflow-y-hidden bg-white shadow-lg inline-block'>
				<CoverImage coverImage={coverImage} title={title} slug={slug} />

				<div className='flex flex-col text-left justify-center bg-white pt-4 shadow rounded-b-lg'>
					<div className='font-bold text-xl h-12 mt-2 w-full font-polished leading-tight px-4 pb-2'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a
								className='hover:underline text-xl font-semibold text-left'
								dangerouslySetInnerHTML={{ __html: title }}
							></a>
						</Link>
					</div>
					<div
						className='text-smxmd px-4 mt-1 text-left leading-tight overflow-y h-16 w-full'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></div>
					<>
						<div className='grid-cols-1 pl-2 font-subpolished'>
							<Avatar author={author} date={date} />
						</div>
					</>
					<hr className='border-customGray w-full mt-2' />
					<div className='text-right items-end align-middle float-right pr-2 py-1 font-subpolished'>
						<CardIcons social={social} />
					</div>
				</div>
			</div>
		</div>
	);
};

// interface CardSlugProps {
// 	title: string;
// }

// const CardSlug = ({ title }: CardSlugProps) => {
// 	return (
// 		<>
// 			<Link as={`/posts/${Card()}`} href='/posts/[slug]'>
// 				<a>
// 				<Card />
// 				</a>
// 			</Link>
// 		</>
// 	);
// };

export default Card;
