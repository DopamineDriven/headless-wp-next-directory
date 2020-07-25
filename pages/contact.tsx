import Header from '../components/fixed-header';

interface Props {
	props: string | number;
}

const Contact = ({ props }: Props) => {
	return (
		<>
			<Header props={props} />
			<div className='p-4 shadow rounded bg-white'>
				<h1 className='text-purple-500 leading-normal'>Next.js</h1>
				<p className='text-gray-500'>with Tailwind CSS</p>
			</div>
		</>
	);
};

export default Contact;
