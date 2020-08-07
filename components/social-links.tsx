import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faFacebook,
	faInstagram,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
// import { faBookmark } from '@fortawesome/free-regular-svg-icons';

type Props = {
	social: { facebook?: any } | { twitter?: any } | { instagram?: any } | any;
	name: string;
	icon: IconProp;
};
const socialLinks: Props[] = [
	{
		social: URL,
		name: 'Facebook',
		icon: faFacebook
	},
	{
		social: URL,
		name: 'Instagram',
		icon: faInstagram
	},
	{
		social: URL,
		name: 'Twitter',
		icon: faTwitter
	}
];

const SocialLinks = () => {
	const socialMap = socialLinks.map(link => (
			<a
				key={link.name}
				aria-label={link.name}
				target='__blank'
				href={link.social}
			></a>
	));
	return (
		<div>
            <ul>
            <li
			className='wp-social-link wp-social-link'
		>
            </li>
            </ul>
        </div>
		// <ul className='wp-block-social-links'>
		// 	<li className='wp-social-link wp-social-link-wordpress'>
		//         <a href="https://wordpress.org"
		//     </li>
		// </ul>
	);
};

export default SocialLinks;
