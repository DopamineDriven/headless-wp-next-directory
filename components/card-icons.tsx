import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
					{' '}
					{social.facebook === '' ? (
						<></>
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
					)}{' '}
					{social.instagram === '' ? (
						<></>
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
					)}{' '}
					{social.twitter === '' ? (
						<></>
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
				</li>
			</ul>
		</div>
	);
};

export default CardIcons;
