# headless-wp-next-directory
Headless WP, NextJS, React, TypeScript, Node, Tailwindcss, Vercel

## Search Bar Configuration
- https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210
- https://github.com/matswainson/nextjs-blog-search-api

## WP Decoupled with Nextjs
- https://github.com/rtCamp/wp-decoupled

## ServerSideProps and Cookies in NextJS
- https://github.com/maticzav/nookies

## WP Developer Blog
- https://deliciousbrains.com/blog/

## Favicon
- https://favicon.io/favicon-converter/
- https://www.creativebloq.com/illustrator/create-perfect-favicon-12112760

## HWP+Next
- https://webdevstudios.com/2020/06/02/building-the-nextjs-9-4-wordpress-example/
- experimental: https://github.com/gregrickaby/nextjs-wordpress
- deployed site https://nextjs-wordpress-indol.now.sh/
- local C:\Users\Anthr\nextjs-wp-experimental\nextjs-wordpress-master
- Deeper dive into api primer for headless WP
    - https://nextjs-wordpress-indol.now.sh/blog/post/headless-wordpress-deeper-dive-api-primer-and-how-to-post-to-other-platforms/22330
- https://webdevstudios.com/2019/10/22/headless-wordpress/
- WP Online Newsrooms
    - https://webdevstudios.com/2020/07/23/wordpress-for-online-newsrooms/
- WP Block Development
    - https://webdevstudios.com/2020/06/16/wordpress-block-development/
- WP Constant Contact Form Plugins
    - https://nextjs-wordpress-indol.now.sh/blog/post/success-story-constant-contact-forms-plugin-for-wordpress/22521
## JAMstack
- https://jamstack.wtf/
- https://files.bejamas.io/ebooks/JAMstack%20SEO%20Guide.pdf
- https://jamstack.org/
- https://bejamas.io/blog/static-site-generators/
- https://bejamas.io/blog/jamstack/
- https://bejamas.io/blog/headless-cms/

## Lazy-Loading Images with Next
- https://stackoverflow.com/questions/54045665/lazy-loading-images-in-next-js-and-or-in-other-forms-of-react-server-side-render

## Configure GraphQL JWT w/ WPEngine
- https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress#step-5-add-authentication-for-preview-mode-optional
- https://wpengine.com/support/sftp/

## Tailwind Starter Kits
- https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars

## Using @fortawesome/react-fontawesome with nextjs
- https://github.com/UnlyEd/next-right-now/blob/master/src/pages/_app.tsx
- https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
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
- c/p command line output into a corresponding .tsx (or .jsx) component
- voila

## next-google-fonts npm
- https://github.com/joe-bell/next-google-fonts
- https://johnny.am/blog/n2-adding-google-fonts-to-nextjs-project
- https://fonts.google.com/specimen/Barlow+Condensed?preview.text=CIMA&preview.text_type=custom&sidebar.open=true&selection.family=Barlow+Condensed|Barlow+Semi+Condensed#license
```css
@font-face {
	font-family: 'Barlow Condensed';
	font-style: normal;
	font-weight: 400;
	src: url('../fonts/barlow-condensed-v4-latin-regular.eot'); /* IE9 Compat Modes */
	src: local('Barlow Condensed Regular'), local('BarlowCondensed-Regular'),
		url('../fonts/barlow-condensed-v4-latin-regular.eot?#iefix') format('embedded-opentype'),
		/* IE6-IE8 */ url('../fonts/barlow-condensed-v4-latin-regular.woff2') format('woff2'),
		/* Super Modern Browsers */
			url('../fonts/barlow-condensed-v4-latin-regular.woff') format('woff'), /* Modern Browsers */
			url('../fonts/barlow-condensed-v4-latin-regular.ttf') format('truetype'),
		/* Safari, Android, iOS */
			url('../fonts/barlow-condensed-v4-latin-regular.svg#BarlowCondensed')
			format('svg'); /* Legacy iOS */
}
```
## Customizable Background Patterns -- SVGs
- http://www.heropatterns.com/

## Useful Supplemental Resources
- https://sergiodxa.com/articles/next-tailwind/
- https://tailwindcss.com/docs/configuration/

## Card ideas
- https://tailwindcomponents.com/component/team-cards
- https://tailwindtemplates.io/cards/#339
- https://tailwindtemplates.io/cards/#335
- https://tailwindtemplates.io/search/#230
- https://tailwindtemplates.io/search/#331

```html
<svg version="1.1" class="h-4 text-dark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px" viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve">
    <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
        S32.459,40,21.983,40z" />
</svg>
```
- https://tailwindcomponents.com/component/search-input