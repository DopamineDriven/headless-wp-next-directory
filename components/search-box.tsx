import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

const SearchBox = () => {
	return (
		<div className='bg-white shadow p-4 flex'>
			<span className='w-auto flex justify-end items-center text-gray-500 p-2' />
			<input
				type='text'
				className='md:w-full lg:w-11/12 rounded p-5'
				placeholder='Try&nbsp;"ethnic&nbsp;media"'
			/>
			<button
				type='submit'
				name='search-button'
				className='mx-2 hover:bg-cimaRed align-middle rounded bg-black hover:text-white border border-black text-white font-bold py-3 px-6 md:px-6 sm:px-4 lg:px-8 duration-200 transition-colors lg:mb-0'
			>
				<a aria-label='search' className='text-xl'>
					{<FontAwesomeIcon icon={faSearch} className='text-white' />}
				</a>
			</button>
		</div>
	);
};

export default SearchBox;
