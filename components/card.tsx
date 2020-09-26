import CoverImage, { CoverImageProps } from './card-image';
import Date from './date';
import Avatar from './card-avatar';
import Link from 'next/link';
import CardIcons from './card-icons';
import { ContentDescriptor } from 'wp-graphql/lib/lib/abstract-types';
import { authorType, socialType } from '../types/posts';
import CardTitle from 'components/card-title';
import CardExcerpt from 'components/card-excerpt';
import { Fragment } from 'react';
import SiteDivider from 'components/site-divider';

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
		<Fragment>
			<div className='block mx-auto select-none w-cardGridMobile'>
				<div className='block overflow-x-hidden overflow-y-hidden transition-all duration-1000 ease-in-out transform border-collapse border-current max-w-socialT sm:w-aboutImage600 sm:max-w-aboutimage600 sm:overflow-hidden rounded-custom'>
					<CoverImage coverImage={coverImage} title={title} slug={slug} />

					<div className='flex flex-col justify-center flex-grow h-auto text-left bg-primary'>
						<CardTitle slug={slug} title={title} />
						<CardExcerpt excerpt={excerpt} />
						<div className='block transition-all duration-500 transform pl-portfolioDivider font-somaRoman'>
							<Avatar author={author.node} modified={modified} />
						</div>
						<SiteDivider />
						<div className='block float-right text-right pr-portfolio font-somaRoman'>
							<CardIcons social={social} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
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
