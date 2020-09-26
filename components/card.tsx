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
		<div className='block select-none'>
			<div className='inline-block overflow-x-hidden overflow-y-hidden rounded-t-custom max-w-aboutImage300'>
				<CoverImage coverImage={coverImage} title={title} slug={slug} />

				<div className='flex flex-col justify-center text-left rounded-b-custom bg-primary'>
					<div className='w-full font-bold leading-tight text-customCardIcons pl-portfolioDivider h-paddingPostTitleBottom'>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a
								className='block font-semibold text-left transition-transform duration-500 transform font-head hover:text-auxiliary translate-y-portfolioDivider'
								dangerouslySetInnerHTML={{ __html: title }}
							></a>
						</Link>
					</div>
					<div
						className='w-full text-left transition-transform duration-500 transform px-portfolioDivider h-paddingPostTitleTop text-customCardExcerpt overflow-y translate-y-mdmxSocial font-somaRoman'
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></div>
					<>
						<div className='grid-cols-1 transition-all duration-500 transform pl-portfolioDivider font-somaRoman -translate-y-mdmxSocial'>
							<Avatar author={author.node} modified={modified} />
						</div>
					</>
					<hr className='w-full mt-2 border-customGray' />
					<div className='block float-right text-right pr-portfolioDivider font-somaRoman'>
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
