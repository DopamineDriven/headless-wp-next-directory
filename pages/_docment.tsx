import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<html lang={process.env.HTML_LANG}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
