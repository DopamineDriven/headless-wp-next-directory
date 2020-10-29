import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCustomWebsite } from '../lib/fas-custom-integration';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faFacebook,
	faInstagram,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { AllPosts_posts_edges_node_social } from '../graphql/__generated__/AllPosts';

interface CardIconProps {
	social: AllPosts_posts_edges_node_social;
}

interface faProps {
	faFacebook: IconProp;
	faInstagram: IconProp;
	faTwitter: IconProp;
	faCustomWebsite: IconProp;
}

// to edit icon size, target iconClass
const CardIcons = ({ social }: CardIconProps): JSX.Element => {
	const anchorClassNull =
		' items-center justify-center mx-portfolioDivider sm:mx-portfolioDivider mb-portfolioDivider text-customExcerpt sm:text-customTitletMobile inline-block leading-relaxed text-center align-middle transition-colors duration-1000  fill-current bg-primary text-quinary focus:outline-none';
	const anchorClass =
		' items-center justify-center inline-block mx-portfolioDivider sm:mx-portfolioDivider mb-portfolioDivider text-customExcerpt sm:text-customTitleMobile leading-relaxed text-center align-middle transition-colors duration-500 bg-primary hover:text-primary focus:outline-none';
	const iconClassNull =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform sm:text-customExcerptMobile text-customTitleMobile fa-portfolioDivider';
	const iconClass =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform sm:text-customExcerptMobile text-customTitleMobile hover:text-tertiary fa-portfolioDivider';
	return (
		<div className='block text-right align-middle'>
			<ul className='block align-middle'>
				<li className='align-middle'>
					{social.facebook === null ? (
						<a
							aria-label='facebook'
							target='__blank'
							href={'#'}
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
							href={'#'}
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
							href={'#'}
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
							href={'#'}
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
