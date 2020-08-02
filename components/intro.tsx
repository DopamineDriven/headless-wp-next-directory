import { CMS_NAME, CMS_URL } from '../lib/constants';

export default function Intro() {
	return (
		<section className='flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-12'>
			<h1 className='text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8'>
				This Bloge Fucks.
			</h1>
			<h4 className='text-center text-black md:text-left text-lg mt-5 md:pl-8'>
				A statically generated blog powered by{' '}
				<a
					href='https://nextjs.org/'
					className='underline hover:text-success duration-200 transition-colors'
				>
					Next.js
				</a>{' '}
				and{' '}
				<a
					href={CMS_URL}
					className='underline hover:text-success duration-200 transition-colors'
				>
					{CMS_NAME}
				</a>
				.
			</h4>
		</section>
	);
}
