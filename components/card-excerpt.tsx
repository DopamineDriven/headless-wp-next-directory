import ReactMarkdown from 'react-markdown/with-html';

interface CardExcerptProps {
	excerpt: string;
}

const CardExcerpt = ({ excerpt }: CardExcerptProps) => {
	return (
		<div className='w-full text-left transition-transform duration-500 transform px-portfolioDivider sm:pb-portfolio h-paddingAboutTitleRight text-customCardExcerpt overflow-y translate-y-portfolio font-somaRoman'>
			<ReactMarkdown
				escapeHtml={false}
				source={excerpt}
				className=' text-customExcerptMobile sm:text-customCardTitle'
			/>
		</div>
	);
};

export default CardExcerpt;
