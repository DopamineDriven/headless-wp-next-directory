import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faGithub,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

type Props = {
	href: string;
	name: string;
	icon: IconProp;
};

const iconLinks: Props[] = [
	{
		href: 'https://www.linkedin.com/in/asross/',
		name: 'facebook',
		icon: faLinkedin
	},
	{
		href: 'https://twitter.com/Dopamine_Driven',
		name: 'twitter',
		icon: faTwitter
	},
	{
		href: 'https://www.github.com/DopamineDriven/',
		name: 'github',
		icon: faGithub
	}
];

const Card = () => {
	const iconMap = iconLinks.map(link => (
		<a
			key={link.name}
			aria-label={link.name}
			target='__blank'
			href={link.href}
			className='bg-black text-white hover:text-black hover:bg-white transition-colors leading-relaxed duration-500 text-lg inline-block text-center items-center align-middle justify-center w-8 border mx-1 my-2 rounded-full border-blizzardBlue focus:outline-none'
		>
			<FontAwesomeIcon
				icon={link.icon}
				className='align-middle text-center'
				fontSize='xl'
			/>
		</a>
	));
	return (
		<div className='row-gap-2 inline-block ml-5'>
			<div className='max-w-xs rounded overflow-hidden shadow-lg my-4 inline-block mx-8 justify-center'>
				<img
					className='w-full'
					src='https://res.cloudinary.com/asross311/image/upload/v1596621036/ASR_Assets/windy-city-devs_xrktse.jpg'
					alt='next'
				/>

				<div className='flex flex-col items-center justify-center bg-white px-4 pt-4 shadow rounded-lg'>
					<div className='inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40'>
						<img
							src='https://res.cloudinary.com/asross311/image/upload/v1592800832/ASR_Assets/Yong_ehso3r.png'
							alt='yonger'
							className='h-14 w-14 rounded-full border-blizzardBlue border-4'
						/>
					</div>

					<h2 className='mt-4 font-bold text-xl'>Windy City Devs</h2>
					<h6 className='mt-2 text-sm font-medium'>
						Modernizing Web Development
					</h6>

					<p className='text-xs text-gray-500 text-center mt-3'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
						molestiae nulla.
					</p>
					<hr className='border-accent-2 w-full mt-8' />

					<ul className='flex flex-row mt-4 space-x-2'>
						<li>{iconMap}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Card;
