const purgecss = [
	'@fullhuman/postcss-purgecss',
	{
		content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
		// extracting class names from templates
		defaultExtractor: content => {
			// liberally capture unused classNames
			const broadMatch = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
			// capture classNames undetected by broadMatch such as .block(class="w-1/5")
			const innerMatch = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
			return broadMatch.concat(innerMatch);
		}
	}
];

module.exports = {
	plugins: [
		'postcss-import',
		'tailwindcss',
		'postcss-nesting',
		process.env.NODE_ENV === 'production' ? purgecss : undefined,
		'autoprefixer',
		'postcss-flexbugs-fixes',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009'
				},
				stage: 3,
				features: {
					'custom-properties': false
				}
			}
		]
	]
};
