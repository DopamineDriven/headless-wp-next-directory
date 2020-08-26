import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCustomWebsite } from '../lib/fas-custom-integration';
import {
	faFacebook,
	faInstagram,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

type CardIconProps = {
	social: any;
};

const CardIcons = ({ social }: CardIconProps) => {
	return (
		<div className='align-middle justify-right text-right content-right inline-block'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{social.facebook === null ? (
						<a
							aria-label='facebook'
							target='__blank'
							href={social.facebook}
							className='bg-customGray text-white hover:text-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faFacebook}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='facebook'
							target='__blank'
							href={social.facebook}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faFacebook}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					)}
					{social.instagram === null ? (
						<a
							aria-label='instagram'
							target='__blank'
							href={social.instagram}
							className='bg-customGray text-white hover:text-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.instagram === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faInstagram}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='instagram'
							target='__blank'
							href={social.instagram}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.instagram === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faInstagram}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					)}
					{social.twitter === null ? (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className='bg-customGray text-white hover:text-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faTwitter}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faTwitter}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					)}
					{social.website === null ? (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className='bg-customGray text-white hover:text-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.website === '' ? (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='align-middle text-center font-extrabold text-md'
								/>
							) : (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className='bg-customGray text-white hover:text-white hover:bg-iconHover transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 h-8 mx-1 my-2 rounded-full focus:outline-none'
						>
							{social.website === '' ? (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='align-middle text-center font-extrabold text-md'
								/>
							) : (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='align-middle text-center font-extrabold text-md'
								/>
							)}
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default CardIcons;
