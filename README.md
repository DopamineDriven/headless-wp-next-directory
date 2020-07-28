# headless-wp-next-directory

Headless WP, NextJS, React, TypeScript, Node, Tailwindcss, Vercel

## HWP+Next
- https://webdevstudios.com/2020/06/02/building-the-nextjs-9-4-wordpress-example/
- experimental: https://github.com/gregrickaby/nextjs-wordpress
- deployed site https://nextjs-wordpress-indol.now.sh/
- local C:\Users\Anthr\nextjs-wp-experimental\nextjs-wordpress-master
- Deeper dive into api priner for headless WP
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
- copy paste the output of the command line into a .tsx (or .jsx) file
- voila

## next-google-fonts npm
- https://github.com/joe-bell/next-google-fonts
- https://johnny.am/blog/n2-adding-google-fonts-to-nextjs-project

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

## Useful Supplemental Resources
- https://sergiodxa.com/articles/next-tailwind/
- https://tailwindcss.com/docs/configuration/

## Card ideas
- https://tailwindtemplates.io/cards/#339
- https://tailwindtemplates.io/cards/#335
- https://tailwindtemplates.io/search/#230
- https://tailwindtemplates.io/search/#331

```html
<div class="p-8">
	<div class="shadow-xl rounded-lg">
		<div
			style="background-image: url('https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"
			class="h-64 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center"
		>
			<p class="text-white font-bold text-4xl">Profile</p>
		</div>
		<div class="bg-white rounded-b-lg px-8">
			<div class="relative">
				<img
					class="right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-8"
					src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg"
					alt="Avatar of Jonathan Reinink"
				/>
			</div>
			<div class="pt-8 pb-8">
				<h1 class="text-2xl font-bold text-gray-700">Link</h1>
				<p class="text-sm text-gray-600">From hyrule</p>

				<p class="mt-6 text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sem
					varius, fringilla sapien at, sollicitudin risus.
				</p>

				<div class="flex justify-around mt-8">
					<i class="material-icons">chat</i>
					<i class="material-icons">duo</i>
					<i class="material-icons">location</i>
				</div>
			</div>
		</div>
	</div>
</div>
```
