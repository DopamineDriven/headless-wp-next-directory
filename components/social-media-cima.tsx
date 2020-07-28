import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faFacebook,
	faInstagram,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

interface Props {
	href: string;
	name: string;
	icon: IconProp;
}

const iconLinks: Props[] = [
	{
		href: 'https://www.facebook.com/ChiIndyMedia/',
		name: 'facebook',
		icon: faFacebook
	},
	{
		href: 'https://twitter.com/chiindymedia?lang=en',
		name: 'twitter',
		icon: faTwitter
	},
	{
		href: 'https://www.instagram.com/chiindymedia/',
		name: 'instagram',
		icon: faInstagram
	}
];

const SocialMediaCima = () => {
	const iconMap = iconLinks.map(link => (
		<a
			key={link.name}
			href={link.href}
			className='bg-black text-white shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center'
		>
			<FontAwesomeIcon icon={link.icon} />;
		</a>
	));
	return <div className='flex flex-wrap m-3'>{iconMap}</div>;
};

export default SocialMediaCima;

// faGoogle,
// faLinkedin,
// faSnapchat
