import ReactGA, { EventArgs } from 'react-ga';

export const gaInit = () => {
	ReactGA.initialize(`UA-${process.env.GA_TRACKING_ID}`);
};
