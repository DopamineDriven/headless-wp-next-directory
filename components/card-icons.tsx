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
	const anchorClassNull =
		' items-center justify-center mx-mdmxSocial my-portfolioDivider text-customCardIcons inline-block leading-relaxed text-center align-middle transition-colors duration-1000 rounded-full fill-current bg-primary text-quinary focus:outline-none';
	const anchorClass =
		' items-center justify-center inline-block mx-mdmxSocial my-portfolioDivider text-customCardIcons leading-relaxed text-center text-white align-middle transition-colors duration-500 rounded-full fill-current bg-primary hover:text-primary focus:outline-none';
	const iconClassNull =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform md:text-customFooter text-customExcerpt fa-portfolioDivider';
	const iconClass =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform md:text-customFooter text-customExcerpt hover:text-tertiary fa-portfolioDivider';
	return (
		<div className='inline-block text-right align-middle'>
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
								<FontAwesomeIcon icon={faFacebook} className={iconClassNull} />
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
								<FontAwesomeIcon icon={faFacebook} className={iconClass} />
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
								<FontAwesomeIcon icon={faInstagram} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='instagram'
							target='__blank'
							href={social.instagram}
							className={anchorClass}
						>
							{social.instagram === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faInstagram} className={iconClass} />
							)}
						</a>
					)}
					{social.twitter === null ? (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className={anchorClassNull}
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faTwitter} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className={anchorClass}
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faTwitter} className={iconClass} />
							)}
						</a>
					)}
					{social.website === null ? (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className={anchorClassNull}
						>
							{social.website === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faCustomWebsite} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className={anchorClass}
						>
							{social.website === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faCustomWebsite} className={iconClass} />
							)}
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default CardIcons;
