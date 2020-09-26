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
	const anchorClassNull = ' items-center justify-center mr-mdmxSocial my-2 text-customExcerpt inline-block leading-relaxed text-center align-middle transition-colors duration-1000 rounded-full fill-current bg-primary text-quinary focus:outline-none'
	const anchorClass = ' items-center justify-center inline-block mr-mdmxSocial my-2 text-customCardIcons leading-relaxed text-center text-white align-middle transition-colors duration-500 rounded-full fill-current bg-primary hover:text-primary focus:outline-none'
	return (
		<div className='inline-block text-right align-middle justify-right content-right'>
			<ul className='align-middle'>
				<li className='align-middle'>
					{social.facebook === null ? (
						<a
							aria-label='facebook'
							target='__blank'
							href={social.facebook}
							className={anchorClassNull}
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faFacebook}
									className='justify-center block font-extrabold text-center text-current align-middle bg-current rounded-full fill-current stroke-current'
									size='2x'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='facebook'
							target='__blank'
							href={social.facebook}
							className={anchorClass}
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faFacebook}
									className='font-extrabold text-center align-middle text-md'
								/>
							)}
						</a>
					)}
					{social.instagram === null ? (
						<a
							aria-label='instagram'
							target='__blank'
							href={social.instagram}
							className={anchorClassNull}
						>
							{social.instagram === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faInstagram}
									className='font-extrabold text-center align-middle text-md'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='instagram'
							target='__blank'
							href={social.instagram}
							className='items-center justify-center inline-block w-8 h-8 mx-1 my-2 text-lg leading-relaxed text-center text-white align-middle transition-colors duration-500 rounded-full bg-customGray hover:text-white hover:bg-iconHover focus:outline-none'
						>
							{social.instagram === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faInstagram}
									className='font-extrabold text-center align-middle text-md'
								/>
							)}
						</a>
					)}
					{social.twitter === null ? (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className='items-center justify-center inline-block w-8 h-8 mx-1 my-2 text-lg leading-relaxed text-center text-white align-middle transition-colors duration-500 rounded-full bg-customGray hover:text-white focus:outline-none'
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faTwitter}
									className='font-extrabold text-center align-middle text-md'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className='items-center justify-center inline-block w-8 h-8 mx-1 my-2 text-lg leading-relaxed text-center text-white align-middle transition-colors duration-500 rounded-full bg-customGray hover:text-white hover:bg-iconHover focus:outline-none'
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon
									icon={faTwitter}
									className='font-extrabold text-center align-middle text-md'
								/>
							)}
						</a>
					)}
					{social.website === null ? (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className='items-center justify-center inline-block w-8 h-8 mx-1 my-2 text-lg leading-relaxed text-center text-white align-middle transition-colors duration-500 rounded-full bg-customGray hover:text-white focus:outline-none'
						>
							{social.website === '' ? (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='font-extrabold text-center align-middle text-md'
								/>
							) : (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='font-extrabold text-center align-middle text-md'
								/>
							)}
						</a>
					) : (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className='items-center justify-center inline-block w-8 h-8 mx-1 my-2 text-lg leading-relaxed text-center text-white align-middle transition-colors duration-500 rounded-full bg-customGray hover:text-white hover:bg-iconHover focus:outline-none'
						>
							{social.website === '' ? (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='font-extrabold text-center align-middle text-md'
								/>
							) : (
								<FontAwesomeIcon
									icon={faCustomWebsite}
									className='font-extrabold text-center align-middle text-md'
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
