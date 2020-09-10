import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<link rel='stylesheet' href='https://use.typekit.net/hzg4mdi.css' />
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// https://github.com/vercel/next.js/issues/9160
// https://gitlab.com/kachkaev/website-frontend/blob/ec20c3bfec24cde40d80194bcad5ba69b308a5ef/src/pages/_document.tsx#L31

/*
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

interface Props {
  locale: "en-US" | "ja-JP";
}

class CustomDocument extends Document<Props> {
  render() {
    return (
      <Html lang={this.props.locale.split("-")[0]}>
        <Head>
          <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
          <link rel="shortcut icon" href="/static/shortcut-icon.png" key="shortcutIcon" />
          <meta name="theme-color" content="#087da1" key="themeColor" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
*/