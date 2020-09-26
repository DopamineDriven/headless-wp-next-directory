import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface CardTitleProps {
	title: string;
	slug?: string | number;
	// postTitle: string;
}

const CardTitle = ({ title, slug }: CardTitleProps) => {
	return (
		<div className='w-full font-bold leading-tight text-customCardTitle pl-portfolioDivider h-paddingPostTitleTop md:h-paddingPostTitleBottom'>
			<Link as={`/posts/${slug}`} href='/posts/[slug]' passHref scroll={true}>
				<a
					className='block font-semibold text-left transition-transform duration-500 transform font-head hover:text-auxiliary translate-y-portfolioDivider'
					aria-label={`portfolio item title - ${title}`}
					id={`home-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={title}
						className='text-center md:text-left hover:text-tertiary text-customTitleMobile md:text-customTitle'
					/>
				</a>
			</Link>
		</div>
	);
};

export default CardTitle;