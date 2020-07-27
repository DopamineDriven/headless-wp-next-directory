# headless-wp-next-directory
Headless WP, NextJS, React, TypeScript, Node, Tailwindcss, Vercel

## Tailwind Starter Kits
- https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars

## Using @fortawesome/react-fontawesome with nextjs
- https://github.com/FortAwesome/react-fontawesome/tree/master/examples
- https://github.com/UnlyEd/next-right-now/tree/master/src/pages
- https://github.com/UnlyEd/next-right-now
- https://github.com/FortAwesome/react-fontawesome#nextjs
- https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project

## CIMA
- https://savechicagomedia.org/
- Color-Scheme:
    - cimaRed: #B8242C
    - white: #FFFFFF
- Font-Family:
    - 'Barlow Semi Condensed', sans-serif
    - https://fonts.google.com/specimen/Barlow+Semi+Condensed?preview.text=CIMA&preview.text_type=custom
        - Regular 400 (regular text)
        - Medium 500 to Semi-bold 600 (titles)
- Transparent PNG ripped from website

## generate JSX from .svg files via the command line
```git
$ npx @svgr/cli --icon Logo.svg
```
- target the .svg file
- copy paste the output of the command line into a .tsx (or .jsx) file
- voila 

## next-google-fonts npm
- 
- https://github.com/joe-bell/next-google-fonts
- https://johnny.am/blog/n2-adding-google-fonts-to-nextjs-project

```css
@font-face {
	font-family: 'Barlow Condensed';
	font-style: normal;
	font-weight: 400;
	src: url('../fonts/barlow-condensed-v4-latin-regular.eot'); /* IE9 Compat Modes */
	src: local('Barlow Condensed Regular'), local('BarlowCondensed-Regular'),
		url('../fonts/barlow-condensed-v4-latin-regular.eot?#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */ url('../fonts/barlow-condensed-v4-latin-regular.woff2')
			format('woff2'),
		/* Super Modern Browsers */
			url('../fonts/barlow-condensed-v4-latin-regular.woff') format('woff'),
		/* Modern Browsers */ url('../fonts/barlow-condensed-v4-latin-regular.ttf')
			format('truetype'),
		/* Safari, Android, iOS */
			url('../fonts/barlow-condensed-v4-latin-regular.svg#BarlowCondensed')
			format('svg'); /* Legacy iOS */
}
```

## Useful Supplemental Resources
- https://sergiodxa.com/articles/next-tailwind/
- https://tailwindcss.com/docs/configuration/