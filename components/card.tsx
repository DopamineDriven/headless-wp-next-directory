import CoverImage, { CoverImageProps } from './cover-image-card';
import Date from './date';
import Avatar from './avatar';
import Link from 'next/link';
import CardIcons from './card-icons';
import { ContentDescriptor } from 'wp-graphql/lib/lib/abstract-types';
import { authorType, socialType } from '../types/posts';

type CardProps = {
	coverImage: CoverImageProps;
	title: string;
	slug: string | number;
	modified: string;
	author: authorType;
	excerpt?: string;
	social: socialType;
};

const Card = ({
	author,
	coverImage,
	excerpt,
	modified,
	slug,
	social,
	title
}: CardProps) => {
	//had to add this in because without it _html was erroring out because it is of type string.

	if (!excerpt) {
		excerpt = '';
	}

	return (
		<div className='inline-block font-polished'>
			<div className='inline-block max-w-xs overflow-x-hidden overflow-y-hidden rounded-lg shadow-lg bg-primary'>
				<CoverImage coverImage={coverImage} title={title} slug={slug} />

				<div className='flex flex-col justify-center text-left rounded-b-lg shadow bg-auxiliary'>
					<div className='w-full h-12 px-4 pb-2 mt-2 text-xl font-bold leading-tight font-polished'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a
								className='text-xl font-semibold text-left hover:underline'
								dangerouslySetInnerHTML={{ __html: title }}
							></a>
						</Link>
					</div>
					<div
						className='w-full h-16 px-4 mt-1 leading-tight text-left text-smxmd overflow-y'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></div>
					<>
						<div className='grid-cols-1 pl-2 font-subpolished'>
							<Avatar author={author.node} modified={modified} />
						</div>
					</>
					<hr className='w-full mt-2 border-customGray' />
					<div className='block float-right pr-2 text-right font-subpolished'>
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
