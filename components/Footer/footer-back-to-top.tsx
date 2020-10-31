import Link from 'next/link';

const FooterBackToTop = (): JSX.Element => {
	return (
		<div className='block float-left col-span-4 text-left'>
			<a className='block float-left transition-all delay-300 transform duration-3000 translate-y-portfolioDivider animate-hero'>
				<div className='block w-auto text-center align-top transition-all font-somaRoman hover:text-tertiary duration-3000 '>
					<Link href='/#top' passHref as='/'>
						<a
							className='justify-start block whitespace-no-wrap transition-all duration-1000 ease-in-out pl-portfolioDivider hover:text-tertiary items-left'
							aria-label='back to top'
						>
							Back to Top
						</a>
					</Link>
				</div>
			</a>
		</div>
	);
};

export default FooterBackToTop;
