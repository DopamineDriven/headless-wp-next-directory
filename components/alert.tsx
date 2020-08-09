import Container from './container';
import cn from 'classnames';
import SocialMediaCima from './social-media-cima';

type Props = {
	preview?: boolean; // this is a boolean
};

const Alert = ({ preview }: Props) => {
	return (
		<div
			className={cn('border-t bg-black', {
				'bg-accent-7 border-accent-7 text-white': preview,
				'bg-black border-accent-2 align-middle text-center content-center items-center justify-center': !preview
			})}
		>
			<Container>
				<div className='pb-1 text-center text-xl text-white align-middle items-center'>
					{preview ? (
						<>
							This is page is a preview.{' '}
							<a
								href='/api/exit-preview'
								className='underline hover:text-cyan duration-200 transition-colors content-center text-center align-middle justify-center'
							>
								Click here
							</a>{' '}
							to exit preview mode.
						</>
					) : (
						<>
							<SocialMediaCima />
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Alert;
