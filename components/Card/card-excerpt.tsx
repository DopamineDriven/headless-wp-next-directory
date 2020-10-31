import ReactMarkdown from 'react-markdown/with-html';
import { FC } from 'react';

type CardExcerptProps = {
	excerpt: string | null;
};

export interface CardExcerptAbstracted extends FC<CardExcerptProps> {}

const CardExcerptFC: CardExcerptAbstracted = props => {
	const { excerpt: excerpt } = props;

	const ExcerptConditional = (
		<>
			{excerpt ? (
				<ReactMarkdown
					escapeHtml={false}
					source={excerpt}
					className=' text-customTitle sm:text-customS lg:text-customCardTitle'
				/>
			) : (
				<ReactMarkdown
					escapeHtml={false}
					source={'excerpt'}
					className=' text-customTitle sm:text-customS lg:text-customCardTitle'
				/>
			)}
		</>
	);

	return (
		<div className='w-full text-left transition-transform duration-1000 transform px-portfolio sm:px-portfolioDivider mb-portfolio sm:mb-portfolioDivider lg:mb-0 sm:pb-portfolio h-paddingAboutTitleRight lg:h-aboutHackingFontAwesomePT overflow-y translate-y-portfolio font-somaRoman'>
			{ExcerptConditional}
		</div>
	);
};

export default CardExcerptFC;
