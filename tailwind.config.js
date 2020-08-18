module.exports = {
	purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			},
			fontFamily: {
				header: ['Playfair Display', 'serif'],
				body: ['Barlow Condensed', 'sans-serif'],
				display: ['Barlow Condensed', 'sans-serif'],
				polished: ['brandon-grotesque', 'sans-serif'],
				subpolished: ['Montserrat', 'sans-serif']
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
			height: {
				whole: '100vh',
				nineTenths: '90vh',
				fourFifths: '80vh',
				threeFourths: '75vh',
				twoThirds: '66.67vh',
				threeFifths: '60vh',
				half: '50vh',
				nineTwentieths: '45vh',
				twoFifths: '40vh',
				oneThird: '33.33vh',
				threeTenths: '30vh',
				oneFourth: '25vh',
				oneFifth: '20vh',
				oneSixth: '16.67vh'
			},
			spacing: {
				7: '1.75rem',
				14: '3.5rem',
				18: '4.5rem',
				28: '7rem',
				44: '11rem',
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
				300: '75rem',
				309: '77.25rem'
			},
			letterSpacing: {
				tighter: '-.04em'
			},
			lineHeight: {
				tight: 1.2
			},
			fontSize: {
				smxmd: '0.9375rem',
				md: '1.0rem',
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
