import { Fragment } from 'react';

interface SocialContact {
	id: number;
	label: string;
	target: string;
	href: string;
}

const socialSnippets: SocialContact[] = [
	{
		id: 0,
		label: 'Email',
		target: '__blank',
		href: 'mailto:ydominguez@chicagoreader.com'
	},
	{
		id: 1,
		label: 'Facebook',
		target: '__blank',
		href: 'https://www.facebook.com/ChiIndyMedia/'
	},
	{
		id: 2,
		label: 'Twitter',
		target: '__blank',
		href: 'https://twitter.com/chiindymedia?lang=en'
	},
	{
		id: 3,
		label: 'Instagram',
		target: '__blank',
		href: 'https://www.instagram.com/chiindymedia/'
	}
];

const LeadSocial = (): JSX.Element => {
	const socialMap: JSX.Element[] = socialSnippets.map(constituent => {
		return (
			<div className='block mt-socialMargin' key={constituent.id}>
				<a
					className='z-50 block tracking-wide transition-all ease-in-out transform hover:text-tertiary py-portfolioDivider md:py-0 translate-y-mdmxSocial animate-hero'
					target={constituent.target}
					aria-label={constituent.label}
					href={constituent.href}
				>
					{constituent.label}
				</a>
			</div>
		);
	});
	return (
		<Fragment>
			<div
				className='invisible md:text-customExcerptMobile md:leading-portfolio md:visible md:transition-all md:-translate-y-portfolioDivider md:transform md:animate-hero md:ease-in-out'
				style={{
					position: 'absolute',
					top: '90.78333vw',
					left: '3.33333vw'
				}}
			>
				{socialMap}
			</div>
			<div
				className='block tracking-wide uppercase transition-all ease-in-out transform text-customTitle font-somaRoman leading-customSLM md:hidden translate-y-portfolioLS animate-hero'
				style={{ position: 'absolute', top: '94.78333vw', left: '3.33333vw' }}
			>
				{socialMap}
			</div>
		</Fragment>
	);
};

export default LeadSocial;
