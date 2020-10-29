# headless-wp-next-directory

## Apollo Client Codegen options

- https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output

```md
USAGE
\$ apollo client:codegen [OUTPUT]

ARGUMENTS
OUTPUT
Directory to which generated files will be written. - For TypeScript/Flow generators, this specifies a directory relative
to each source file by default. - For TypeScript/Flow generators with the "outputFlat" flag is set,
and for the Swift generator, this specifies a file or directory
(absolute or relative to the current working directory) to which: - a file will be written for each query (if "output" is a
directory) - all generated types will be written - For all other types, this defines a file (absolute or relative to
the current working directory) to which all generated types are
written.

OPTIONS
-c, --config=config
Path to your Apollo config file

-g, --graph=graph
The ID for the graph in Apollo to operate client commands with.
Overrides config file if set.

-v, --variant=variant
The variant of the graph in Apollo to associate this client to

--[no-]addTypename
[default: true] Automatically add \_\_typename to your queries, can be
unset with --no-addTypename

--clientName=clientName
Name of the client that the queries will be attached to

--clientReferenceId=clientReferenceId
Reference id for the client which will match ids from client traces,
will use clientName if not provided

--clientVersion=clientVersion
The version of the client that the queries will be attached to

--customScalarsPrefix=customScalarsPrefix
Include a prefix when using provided types for custom scalars

--endpoint=endpoint
The URL for the CLI use to introspect your service

--excludes=excludes
Glob of files to exclude for GraphQL operations. Caveat: this doesn't
currently work in watch mode

--globalTypesFile=globalTypesFile
By default, TypeScript will put a file named "globalTypes.ts" inside
the "output" directory. Set "globalTypesFile" to specify a different
path. Alternatively, set "tsFileExtension" to modify the extension of
the file, for example "d.ts" will output "globalTypes.d.ts"

--header=header
Additional header to send during introspection. May be used multiple
times to add multiple headers. NOTE: The `--endpoint` flag is REQUIRED
if using the `--header` flag.

--includes=includes
Glob of files to search for GraphQL operations. This should be used to
find queries _and_ any client schema extensions

--key=key
The API key to use for authentication to Apollo

--localSchemaFile=localSchemaFile
Path to one or more local GraphQL schema file(s), as introspection
result or SDL. Supports comma-separated list of paths (ex.
`--localSchemaFile=schema.graphql,extensions.graphql`)

--mergeInFieldsFromFragmentSpreads
Merge fragment fields onto its enclosing type

--namespace=namespace
The namespace to emit generated code into.

--omitDeprecatedEnumCases
Omit deprecated enum cases from generated code [Swift only]

--only=only
Parse all input files, but only output generated code for the
specified file [Swift only]

--operationIdsPath=operationIdsPath
Path to an operation id JSON map file. If specified, also stores the
operation ids (hashes) as properties on operation types [currently
Swift-only]

--outputFlat
By default, TypeScript/Flow will put each generated file in a
directory next to its source file using the value of the "output" as
the directory name. Set "outputFlat" to put all generated files in the
directory relative to the current working directory defined by
"output".

--passthroughCustomScalars
Use your own types for custom scalars

--queries=queries
Deprecated in favor of the includes flag

--suppressSwiftMultilineStringLiterals
Prevents operations from being rendered as multiline strings [Swift
only]

--tagName=tagName
Name of the template literal tag used to identify template literals
containing GraphQL queries in Javascript/Typescript code

--target=target
(required) Type of code generator to use (swift | typescript | flow |
scala | json | json-modern (exposes raw json types))

--tsFileExtension=tsFileExtension
By default, TypeScript will output "ts" files. Set "tsFileExtension"
to specify a different file extension, for example "d.ts"

--useFlowExactObjects
Use Flow exact objects for generated types [flow only]

--useFlowReadOnlyTypes
Use read only types for generated types [flow only]. **Deprecated in
favor of `useReadOnlyTypes`.**

--useReadOnlyTypes
Use read only types for generated types [flow | typescript]

--watch
Watch for file changes and reload codegen

ALIASES
\$ apollo codegen:generate
```

## Code Review - Advanced Apollo TS

- https://github.com/borisowsky/next-advanced-apollo-starter/blob/master/tsconfig.json

## Make Links "Crawlable"

- https://support.google.com/webmasters/answer/9112205

## Try adding undefined

- try adding undefined with null, so that null or undefined are both covered...
- https://www.amitmerchant.com/strictly-check-null-undefined-typescript/

## AWS Amplify

- https://github.com/dabit3/nextjs-data-story/blob/main/components/Comments.js
- https://dev.to/dabit3/next-js-the-data-story-2b0d

## GraphQL.js + CodeGen

- https://www.techhive.io/our-insights/how-to-build-a-powerful-blog-with-nextjs-and-contentful
- https://graphql-code-generator.com/docs/plugins/typescript-apollo-next

## PostOrderByType

```ts
import { GraphQLEnumType } from 'graphql';
export declare type PostOrderBy =
	| 'date'
	| 'id'
	| 'include'
	| 'relevance'
	| 'slug'
	| 'title';
declare const postOrderByType: GraphQLEnumType;
export default postOrderByType;
```

- https://medium.com/swlh/graphql-js-vs-typegraphql-vs-graphql-nexus-2a8036deb851

- Polish About Page
- Polish Contact Page

## GraphQL-let codegen (vercel/next example repo)

- https://github.com/vercel/next.js/tree/canary/examples/with-typescript-graphql

## 9-28-20

- One-Graph
  - https://www.onegraph.com/
- GraphQL-Nexus for strongly Typed GQL Schemas (1.7k stars)
  - https://github.com/graphql-nexus/schema/tree/develop/examples/apollo-fullstack
- GraphQL Voyager
  - https://apis.guru/graphql-voyager/
- GraphQL File Uploads with React Hooks, TypeScript, Amazon-S3

  - https://www.apollographql.com/blog/graphql-file-uploads-with-react-hooks-typescript-amazon-s3-tutorial-ef39d21066a2/

- https://nextjs-graphql-with-prisma-simple.vercel.app/api?query=query%20MyQuery%20%7B%0A%20%20allPosts%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D&operationName=MyQuery
- Implementing apollo-client isomorphic unfetch
- Query using apollo hooks
- plugins to infer GQL-TS typings and generate them in a designated file
- Here. We. Go.

- https://dev.to/kendalmintcode/using-wordpress-as-a-headless-cms-with-next-js-2h5p
- https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
- https://stackoverflow.com/questions/55873197/apollo-query-variable-error-when-passing-state

## wpapi and @types/wpapi packages

- VERDICT: For REST, not GQL; Could revisit experimentally (?)
- https://linguinecode.com/post/how-to-make-wordpress-headless-and-fetch-posts-with-javascript
- https://github.com/wp-api/node-wpapi#requesting-different-resources
- https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wpapi/index.d.ts
- https://www.npmjs.com/package/@types/wpapi

### Wp-GraphQL-WooCommerce Plugin

- - https://github.com/wp-graphql/wp-graphql-woocommerce

### Better REST Api Featured Images plugin

- https://linguinecode.com/post/how-to-make-wordpress-headless-and-fetch-posts-with-javascript

## IMPORTANT @jlovejo2

- all files ignored by eslintignore currently
- used this source to configure our project
- https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js
- will revisit in the future

## ALSO IMPORANT

- Check out the getServerSideProps method used by the author here
- passing query and resolving props types in that way for getServerSideProps
- When attempting this approach (see my revisions in andrew-james-notes.md) the following error was returned

```bash
$ yarn dev
yarn run v1.22.5
$ next
info  - Loaded env from C:\Users\Anthr\headless-wp-next-directory\.env.local
ready - started server on http://localhost:3000
event - compiled successfully
event - build page: /next/dist/pages/_error
wait  - compiling...
event - compiled successfully
event - build page: /
wait  - compiling...
event - compiled successfully
[
  {
    message: 'Field "posts" argument "where" requires type PostObjectsConnectionOrderbyEnum, found undefined.',
    extensions: { category: 'graphql' },
    locations: [ [Object] ]
  },
  {
    message: 'Field "posts" argument "where" requires type OrderEnum, found undefined.',
    extensions: { category: 'graphql' },
    locations: [ [Object] ]
  }
]
Error: Failed to fetch API
    at fetchAPI (C:\Users\Anthr\headless-wp-next-directory\.next\server\pages\index.js:3204:11)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async getAllPostsForHomeAlphabetical (C:\Users\Anthr\headless-wp-next-directory\.next\server\pages\index.js:3249:16)
    at async getServerSideProps (C:\Users\Anthr\headless-wp-next-directory\.next\server\pages\index.js:6530:20)
    at async renderToHTML (C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\render.js:38:185)
    at async C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:76:329
    at async C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:75:142
    at async DevServer.renderToHTMLWithComponents (C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:99:364)
    at async DevServer.renderToHTML (C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:100:255)
[
  {
    message: 'Field "posts" argument "where" requires type PostObjectsConnectionOrderbyEnum, found undefined.',
    locations: [ [Object] ]
  },
  {
    message: 'Field "posts" argument "where" requires type OrderEnum, found undefined.',
    extensions: { category: 'graphql' },
    locations: [ [Object] ]
  }
]
Error: Failed to fetch API
    at fetchAPI (C:\Users\Anthr\headless-wp-next-directory\.next\server\pages\index.js:3204:11)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async getAllPostsForHomeAlphabetical (C:\Users\Anthr\headless-wp-next-directory\.next\server\pages\index.js:3249:16)
    at async getServerSideProps (C:\Users\Anthr\headless-wp-next-directory\.next\server\pages\index.js:6530:20)
    at async renderToHTML (C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\render.js:38:185)
    at async C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:76:329
    at async C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:75:142
    at async DevServer.renderToHTMLWithComponents (C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:99:364)
    at async DevServer.renderToHTML (C:\Users\Anthr\headless-wp-next-directory\node_modules\next\dist\next-server\server\next-server.js:100:255)
```

## TypeRoots && TypePlugins && TSLint/ESLint config (.eslintrc.json)

- https://medium.com/@gogl.alex/how-to-set-up-typescript-eslint-prettier-for-next-gatsby-c5330b4a9b7a
- https://github.com/Quramy/typescript-eslint-language-service
- https://www.typescriptlang.org/tsconfig#typeRoots
- example of `.eslintrc.json` from https://github.com/DopamineDriven/wcd

```json
{
	"parser": "@typescript-eslint/parser",
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 2020,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": ["@typescript-eslint"],
	"env": {
		"node": true,
		"es6": true,
		"browser": true
	},
	"rules": {
		// could set "indent": [true, "tabs", 1]
		"indent": "off",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/prop-types": "off"
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}
```

## Prettier format script

- Resolve

```json
		"prettier-format": "prettier --config .prettierrc 'components/**/*.tsx' --write"
```

## TailwindCSS Tips and Tricks

- https://tailwindcss.com/docs/transition-timing-function
- https://laravel-news.com/tailwind-css-tips-and-tricks
- https://tailwind.run/PfhdtG/1

## WP-GQL/WP-GQL-ACF

- https://github.com/wp-graphql/wp-graphql-acf

## ReactElement vs ReactNode vs JSX.Element

- https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement
- https://www.mmbyte.com/article/44732.html#:~:text=Element%20is%20ReactElement%20%2C%20whose%20props,render()%20in%20class%20components

```ts
interface ReactElement<
	P = any,
	T extends string | JSXElementConstructor<any> =
		| string
		| JSXElementConstructor<any>
> {
	type: T;
	props: P;
	key: Key | null;
}
interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode =
	| ReactChild
	| ReactFragment
	| ReactPortal
	| boolean
	| null
	| undefined;
```

## InferGetStaticPropsType, GetStaticPropsResult, GetStaticPropsContext...

- https://github.com/vercel/next.js/pull/11842/files

## getInitialProps

- https://linguinecode.com/post/next-js-typescript-getinitialprops

## Incremental Static Regeneration (ISR)

- https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration
- https://github.com/vercel/next.js/discussions/11552
- https://youtu.be/IJkTpR7sSwI

## node_modules/wp-graphql/lib/lib/abstract-types

Headless WP, NextJS, React, TypeScript, Node, Tailwindcss, Vercel

## 8/26/20

- Conditional rendering support incorporated for social icons
  - if string === '', then return
  ```tsx
  <></>
  ```
- so, if a company doesn't have one or more social media sites, there will be no corresponding icon on their card
- see components/card-icons.tsx
  - https://dev.to/dopaminedriven/hacking-the-fontawesome-library-for-custom-icon-integration-with-nextjs-and-typescript-1em8

## Patching node_modules

```git
npx patch-package @fortawesome/fontawesome-common-types
```

- however, if you were to edit the core css in fontawesome-svg-core, for example, then target that module

```git
npx patch-package @fortawesome/fontawesome-svg-core
```

- see my post for more details on custom icon incorporation

## Multilingual Support

- https://medium.com/swlh/making-a-multilingual-site-with-next-js-part-2-518c5c699d23 (published 8/13/20)
- https://levelup.gitconnected.com/a-simple-next-js-frontend-for-a-multilingual-website-ae31a17387e2

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
- https://edwincromley.gitbooks.io/wp-graphql/content/handling-custom-post-types.html \*\*\*
- https://github.com/wp-graphql/wp-graphql-custom-post-type-ui
- https://github.com/wp-graphql/wp-graphql/issues/344
- https://stackoverflow.com/questions/60170927/wordpress-wp-graphql-not-working-with-custom-post-type \*\*\*

## WPGQL Typings

- https://medium.com/javascript-in-plain-english/graphql-pagination-using-edges-vs-nodes-in-connections-f2ddb8edffa0 \*\*\*
- https://relay.dev/graphql/connections.htm **\*\*\*\***&larr;
- https://www.typescriptlang.org/docs/handbook/basic-types.html _EDGE(S) AND NODE(S) MUST BE OBJECT TYPES_
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

## Customizable Background Patterns -- SVGs

- http://www.heropatterns.com/

## Useful Supplemental Resources

- https://sergiodxa.com/articles/next-tailwind/
- https://tailwindcss.com/docs/configuration/
- https://tailwindcomponents.com/component/search-input

## HTML Symbols

- https://dev.w3.org/html5/html-author/charref
