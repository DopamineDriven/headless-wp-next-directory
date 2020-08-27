module.exports = {
	future: {
		removeDeprecatedGapUtilities: true
	},
	purge: ['./components/**/*.tsx', './pages/**/*.tsx', './utils/**/*.tsx'],
	theme: {
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-0.025em',
			wide: '.025em',
			wider: '.05em',
			widest: '.15em'
		},
		rotate: {
			'0': '0deg',
			'45': '45deg',
			'180': '180deg',
			'855': '855deg'
		},
		opacity: {
			'10': '10',
			'25': '25',
			'50': '50',
			'75': '75',
			'90': '90',
			'100': '100'
		},
		extend: {
			transitionDuration: {
				'0': '0ms',
				'200': '200ms',
				'300': '300ms',
				'500': '500ms',
				'700': '700ms',
				'1000': '1000ms',
				'2000': '2000ms',
				'3000': '3000ms'
			},
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
				iconHoverTwo: '#AEAEAE',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5',
				bloodMoon: '#cc6633',
				herokuStroke: '#6762A6',
				gqlPink: '#E535AB',
				devPurple: '#3333CC',
				lighterBlack: '#323232',
				gatsbyPurple: '#663399'
			},
			height: {
				whole: '100vh',
				nineTenths: '90vh',
				sevenEighths: '87.5vh',
				fourFifths: '80vh',
				threeFourths: '75vh',
				sevenTenths: '70vh',
				twoThirds: '66.67vh',
				threeFifths: '60vh',
				half: '50vh',
				nineTwentieths: '45vh',
				twoFifths: '40vh',
				sevenTwentieths: '35vh',
				oneThird: '33.33vh',
				threeTenths: '30vh',
				oneFourth: '25vh',
				oneFifth: '20vh',
				oneSixth: '16.67vh',
				oneTenth: '10vh',
				oneTwentieth: '5vh'
			},
			spacing: {
				half: '0.125rem',
				threeQuarters: '0.175rem',
				threeHalves: '0.325rem',
				7: '1.75rem',
				14: '3.5rem',
				18: '4.5rem',
				28: '7rem',
				44: '11rem',
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
				275: '69.25rem',
				300: '75rem',
				309: '77.25rem'
			},
			lineHeight: {
				superpressed: 0.3,
				pressed: 0.6,
				tight: 1.2,
				chillin: 1.8
			},
			fontSize: {
				onehalf: '0.5rem',
				smxmd: '0.9375rem',
				'1xl': '1.0rem',
				threehalves: '1.25rem',
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
