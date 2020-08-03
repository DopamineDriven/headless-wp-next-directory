import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import { ReactNode } from 'react';

type Props = {
	preview?: boolean;
	children: ReactNode;
};

export default function Layout({ preview, children }: Props) {
	return (
		<>
			<Meta />
			<div className='min-h-screen'>
				<main>{children}</main>
			</div>
			<Alert preview={preview} />
			<Footer />
		</>
	);
}
