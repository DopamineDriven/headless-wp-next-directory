import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';
import { Title_posts_edges_node } from '@graphql/__generated__/Title';

export interface CardTitleProps {
	title: string | null;
	slug: string | null;
}

export interface CardTitleFC extends FC<CardTitleProps> {}

const CardTitleAbstracted: CardTitleFC = props => {
	const { title: title, slug: slug } = props;

	const TitleConditional = (
		<a
			className='block font-semibold text-left transition-all duration-1000 transform animate-hero font-head hover:text-tertiary translate-y-portfolioDivider'
			aria-label={`portfolio item title - ${title}`}
			id={`home-${title}`}
		>
			{title ? (
				<ReactMarkdown
					escapeHtml={false}
					source={title}
					className='text-center transition-all transform sm:text-left hover:text-tertiary text-customTitleMobile sm:text-customTitle lg:text-customS animate-hero '
				/>
			) : (
				<ReactMarkdown
					escapeHtml={false}
					source={'title'}
					className='text-center transition-all transform sm:text-left hover:text-tertiary text-customTitleMobile sm:text-customTitle lg:text-customS animate-hero '
				/>
			)}
		</a>
	);

	return (
		<div className='block w-auto font-bold leading-tight text-customCardTitle pl-portfolioDivider h-paddingPostTitleTop sm:h-paddingPostTitleBottom'>
			<Link as={`/posts/${slug}`} href='/posts/[slug]' passHref scroll={true}>
				{TitleConditional}
			</Link>
		</div>
	);
};

export default CardTitleAbstracted;
