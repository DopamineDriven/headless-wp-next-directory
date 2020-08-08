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
		<div className="align-middle justify-center text-center content-center">
			<ul className='flex flex-row mt-4 space-x-2'>
				<li className='align-middle'>
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
					</a>{' '}
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
					</a>{' '}
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
	);
};

export default CardIcons;
