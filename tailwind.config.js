module.exports = {
	purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Barlow Condensed', 'sans-serif'],
				display: ['Barlow Condensed', 'sans-serif']
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				black: '#000000',
				white: '#ffffff',
				success: '#0070f3',
				cyan: '#79FFE1',
				blizzardBlue: '#b3ddf2',
				chicagoRed: '#ff0000',
				cimaRed: '#B8242C',
				wcdPink: '#eb57a3',
				tinyHouseWhite: '#f0f1f2',
				customGray: '#D0D0D0',
				iconHover: '#9D9D9D',
				iconHoverTwo: '#AEAEAE'
			},
			spacing: {
				28: '7rem'
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				tight: 1.2
			},
			fontSize: {
				'1xl': '1.0rem',
				'3xl': '2.0rem',
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem'
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
			}
		}
	}
};
