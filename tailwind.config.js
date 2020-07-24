module.exports = {
	purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				'accent-1': '#fafafa',
				'accent-2': '#eaeaea',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79ffe1',
				blizzardBlue: '#b3ddf2',
				red: '#ff0000',
				white: '#ffffff',
				black: '#000000',
				pink: 'eb57a3',
				blue: '#387af5'
			},
			spacing: {
				28: '7rem' // 112 px; see table in readme for conversion chart
			},
			letterSpacing: {
				tighter: '-.04em' // -.16tw; -.64px
			},
			lineHeight: {
				tight: 1.2 // 0.3rem; 4.8px
			},
			fontSize: {
				'5x1': '2.5rem', // 10tw; 40px
				'6x1': '2.75rem', // 11tw; 44px
				'7x1': '4.5rem', // 18tw; 72px
				'8x1': '6.25rem' // 25tw; 100px
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgna(0, 0, 0, 0.12)'
			}
		}
	}
	// variants: {}, // https://tailwindcss.com/docs/configuring-variants/
	// plugins: [] // https://tailwindcss.com/docs/plugins
};
