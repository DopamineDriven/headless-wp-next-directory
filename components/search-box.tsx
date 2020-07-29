import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

// https://tailwindtemplates.io/search/#230

const SearchBox = () => {
	return (
		<div className='bg-white shadow-2xl p-4 mt-8 md:mt-6 sm:mt-4 flex'>
			<span className='w-auto flex justify-end items-center text-gray-500 p-2' />
			<label className='text-black text-2xl align-middle mx-2 pt-3'>Search</label>
			<input
				type='text'
				className='md:w-full lg:w-11/12 rounded p-5'
				placeholder='Try&nbsp;"ethnic&nbsp;media"'
				name='search-form'
			/>

			<button
				type='submit'
				name='search-button'
				className='mx-2 hover:bg-white align-middle shadow-xl rounded-full bg-black hover:text-black border border-black text-white font-bold py-3 px-6 md:px-6 sm:px-4 lg:px-8 duration-200 transition-colors lg:mb-0'
			>
				<a aria-label='search' className='text-xl'>
					{<FontAwesomeIcon icon={faSearch} />}
				</a>
			</button>
		</div>
	);
};

export default SearchBox;
