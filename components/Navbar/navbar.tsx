import { FC, useState } from 'react';
import cn from 'classnames';

interface NavbarProps {
	root?: string;
}

const Navbar: FC<NavbarProps> = props => {
	const { root } = props;

	return (
		<>
			<nav className={cn(root, '')}></nav>
		</>
	);
};

export default Navbar;
