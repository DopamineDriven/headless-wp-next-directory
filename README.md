# headless-wp-next-directory

Headless WP, NextJS, React, TypeScript, Node, Tailwindcss, Vercel

## Responsive Navbar ideas
- Apple (mobile)
  - https://www.apple.com/
- Coupled
  - https://github.com/maximakymenko/react-burger-menu-article-app
  - https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
- https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb

## Thread Vercel with WPEngine in Production
- Goal: link new/updated posts in the headless CMS with a deployed build on Vercel in real time
  - First steps: 
    - determine how WP Engine communicates with local env under the hood
    - configure communication between Vercel and WP Engine clouds in real time

## WPGQL Custom Post Types
- https://spin.atomicobject.com/2020/03/29/next-js-graphql-api/
- https://wordpress.org/plugins/headless-cms/
- https://www.wpwatercooler.com/devbranch/ep04-using-wpgraphql-with-wordpress/
- https://edwincromley.gitbooks.io/wp-graphql/content/handling-custom-post-types.html ***
- https://github.com/wp-graphql/wp-graphql-custom-post-type-ui
- https://github.com/wp-graphql/wp-graphql/issues/344
- https://stackoverflow.com/questions/60170927/wordpress-wp-graphql-not-working-with-custom-post-type ***

## WPGQL Typings
- https://medium.com/javascript-in-plain-english/graphql-pagination-using-edges-vs-nodes-in-connections-f2ddb8edffa0 ***
- https://relay.dev/graphql/connections.htm ********&larr;
- https://www.typescriptlang.org/docs/handbook/basic-types.html *EDGE(S) AND NODE(S) MUST BE OBJECT TYPES*
- https://github.com/aliemteam/wp-graphql
- https://github.com/MichalLytek/type-graphql#readme

```ts
add_action( 'graphql_register_types', function() {
  register_graphql_field( 'Post', 'color', [
     'type' => 'String',
     'description' => __( 'The color of the post', 'wp-graphql' ),
     'resolve' => function( $post ) {
       $color = get_post_meta( $post->ID, 'color', true );
       return ! empty( $color ) ? $color : 'blue';
     }
  ] );
} );
```

## Simple Social Icons Plugin
```ts
query MyQuery {
  plugins {
    edges {
      node {
        name
        path
        pluginUri
        id
        description
        author
        authorUri
      }
    }
  }
}
```
- returns
```json
{
  "node": {
    "name": "Simple Social Icons",
    "path": "simple-social-icons/simple-social-icons.php",
    "pluginUri": "https://wordpress.org/plugins/simple-social-icons/",
    "id": "cGx1Z2luOnNpbXBsZS1zb2NpYWwtaWNvbnMvc2ltcGxlLXNvY2lhbC1pY29ucy5waHA=",
    "description": "A simple CSS and SVG driven social icons widget.",
    "author": "StudioPress",
    "authorUri": "https://www.studiopress.com/"
  }
}
```
- plugins are independent of posts and authors
- plugin component made
- plugin in index and slug.tsx

## WP-GraphQL-Composer Plugin
- https://developer.aliyun.com/mirror/npm/package/wp-graphql-composer/v/0.1.7

## Search Bar Configuration

- https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210
- https://github.com/matswainson/nextjs-blog-search-api

## WP Decoupled with Nextjs

- https://github.com/rtCamp/wp-decoupled

## ServerSideProps and Cookies in NextJS

- https://github.com/maticzav/nookies

## WP Developer Blog

- https://deliciousbrains.com/blog/

### Generate a random secret

- open the terminal, type "node", hit enter
- next, input the following:

```git
require('crypto').randomBytes(64).toString('hex')
```

- this returns a 122-character hexadecimal string

## Generating a public/private keypair for WP Engine SFTP access

- enter the following into a bash terminal

```git
ssh-keygen -t rsa -b 4096 -f ~/.ssh/wpengine_rsa
```

- then, to connect with WP Engine site of interest

```git
ssh -i ~/.ssh/wpengine_rsa -o IdentitiesOnly=yes nextjsheadless@nextjsheadless.ssh.wpengine.net
```

- this connects you with WP Engine and a figlet-mediated animation appears
- cd into the correct directory and execute ls to ensure wp-config.php is located here

```git
cd sites/nextjsheadless && ls
```

- then enter the following to insert a new key value pair under the WP Engine Settings # tag of the wp-config file

```git
wp config set GRAPHQL_JWT_AUTH_SECRET_KEY <secret generated using node terminal> --placement=after --anchor=Settings
```

- double check the placement of the insertion by running

```git
wp config edit vim
```

- if changes need to be made, enter

```git
:vim wp config edit
```

- then enter

```git
i
```

- this enables --&nbsp;INSERT&nbsp;-- mode in Vim
- proceed with editing; once finished, save your changes with

```git
:x
```

- this successfully saves and exits the Vim editor
- if no changes are required after opening the Vim editor, then

```git
:qa!
```

- this exits the vim editor without saving any changes
- whew, lad
- https://www.vim.org/
- https://developer.wordpress.org/cli/commands/

## Enable WPGraphQL JWT Authentication Plugin via WP Engine GraphiQL plugin

- after enabling, open GraphiQL interface

```gql
mutation Login {
	login(
		input: {
			clientMutationId: "uniqueId"
			password: "insert password"
			username: "nextjsheadless"
		}
	) {
		refreshToken
	}
}
```

- this returns a refresh token value for the WORDPRESS_AUTH_REFRESH_TOKEN key in .env.local
- set the value of the WORDPRESS_PREVIEW_SECRET key to any url-friendly string
```ts
href={`localhost:3000/api/preview?secret=${process.env.WORDPRESS_PREVIEW_SECRET}&id=${draft.id}`}
```

## View drafts locally or on the deployed site

- append the following relative path on the landing page url
- /api/preview?secret=secret-path&id=target-id
- where - secret-path = /preview-mode - target-id = id of the unpublished post (determined via phpmyadmin)
- this will load the corresponding post
- for example, try

```url
https://headless-wp-next-directory.vercel.app/api/preview?secret=/preview-mode&id=22
```

- (08-04-20)

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
- https://codeconqueror.com/blog/using-google-fonts-with-next-js
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

- https://tailwindcomponents.com/component/search-input

## HTML Symbols

- https://dev.w3.org/html5/html-author/charref
