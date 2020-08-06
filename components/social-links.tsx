import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faFacebook,
	faInstagram,
    faTwitter,
    faWordpress
} from '@fortawesome/free-brands-svg-icons';

type Props = {
	href: string;
	name: string;
	icon: IconProp;
};
const socialLinks: Props[] = [
	{
		href: `https://www.facebook.com/`,
		name: 'Facebook',
		icon: faFacebook
	},
	{
		href: `https://twitter.com/`,
		name: 'Twitter',
		icon: faTwitter
	},
	{
		href: `https://www.instagram.com/`,
		name: 'Instagram',
		icon: faInstagram
    },
    {
        href: 'https://www.wordpress.org',
        name: 'wordpress',
        icon: faWordpress
    }
];

const SocialLinks = () => {
    // const socialMap = socialLinks.map(link => (
    //     <li key={link.name}
    //         className={`wp-social-link wp-social-link-${link.name} `}
    //     >

    //     </li>
    // ))
	return (
        <div></div>
		// <ul className='wp-block-social-links'>
		// 	<li className='wp-social-link wp-social-link-wordpress'>
        //         <a href="https://wordpress.org"
        //     </li>
		// </ul>
	);
};

export default SocialLinks;
