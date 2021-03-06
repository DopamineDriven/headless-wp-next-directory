import { FC } from 'react';

interface SiteDividerProps {
	classNameBorder?: string;
}

interface SiteDivide extends FC<SiteDividerProps> {}

const SiteDivider: SiteDivide = (props): JSX.Element => {
	const { classNameBorder = ` border-primary` } = props;
	return (
		<hr
			className={
				'mx-auto w-portfolioDividerWidth max-w-portfolioDividerWidth mt-portfolioDivider pb-portfolioDivider' +
				classNameBorder
			}
		/>
	);
};

export default SiteDivider;
