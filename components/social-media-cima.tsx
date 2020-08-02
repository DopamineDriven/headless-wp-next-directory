import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faFacebook,
	faInstagram,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

type Props = {
	href: string;
	name: string;
	icon: IconProp;
};

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
			aria-label={link.name}
			target='__blank'
			href={link.href}
			className='bg-black text-white hover:text-black hover:bg-white transition-colors duration-500 shadow-lg font-lg items-center justify-center align-center outline-none focus:outline-none py-1 px-3 inline-block text-center'
		>
			<FontAwesomeIcon icon={link.icon} fontSize='xl' />
		</a>
	));
	return (
		<div className='flex flex-wrap my-1'>
			<ul className='flex flex-col lg:flex-row list-none lg:mx-auto'>
				<li>{iconMap}</li>
			</ul>
		</div>
	);
};

export default SocialMediaCima;

// faGoogle,
// faLinkedin,
// faSnapchat
