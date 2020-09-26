import { FC } from 'react';

interface SiteDividerProps {
	classNameBorder?: string;
}

interface SiteDivide extends FC<SiteDividerProps> {}

const SiteDivider: SiteDivide = (props): JSX.Element => {
	const {
		classNameBorder = ` border-primary mt-portfolioDivider pb-portfolioDivider`
	} = props;
	return (
		<hr
			className={
				'mx-auto w-portfolioDividerWidth max-w-portfolioDividerWidth ' +
				classNameBorder
			}
		/>
	);
};

export default SiteDivider;
