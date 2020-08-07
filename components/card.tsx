import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CoverImage, { CoverImageProps } from './cover-image-card';
import {
	faTwitter,
	faFacebook,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';
import Date from './date';
import Avatar from './avatar';
import Link from 'next/link';

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

					<ul className='flex flex-row mt-4 space-x-2'>
						<li>
							{' '}
							<a
								aria-label='facebook'
								target='__blank'
								href={social.facebook}
								className='bg-black text-white hover:text-black hover:bg-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 border mx-1 my-2 rounded-full border-blizzardBlue focus:outline-none'
							>
								<FontAwesomeIcon
									icon={faFacebook}
									className='align-middle text-center'
									fontSize='xl'
								/>
							</a>
							{' '}
							<a
								aria-label='instagram'
								target='__blank'
								href={social.instagram}
								className='bg-black text-white hover:text-black hover:bg-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 border mx-1 my-2 rounded-full border-blizzardBlue focus:outline-none'
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className='align-middle text-center'
									fontSize='xl'
								/>
							</a>
							{' '}
							<a
								aria-label='twitter'
								target='__blank'
								href={social.twitter}
								className='bg-black text-white hover:text-black hover:bg-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 border mx-1 my-2 rounded-full border-blizzardBlue focus:outline-none'
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className='align-middle text-center'
									fontSize='xl'
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Card;
