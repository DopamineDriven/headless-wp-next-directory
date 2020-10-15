module.exports = {
	plugins: [
		'tailwindcss',
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

// module.exports={
//     plugins:[
//         'tailwindcss',
//         process.env.NODE_ENV === 'production' ? [
//             '@fullhuman/postcss-purgecss',
//             {
//                 content : [
//                     './pages/**/*.{js,jsx,ts,tsx}',
//                     './components/**/*.{js,jsx,ts,tsx}'
//                 ],
//                 defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//             }

//         ] : undefined,
//         'postcss-preset-env',
//     ]
// }
// then set purge to false in tailwind.config.js
