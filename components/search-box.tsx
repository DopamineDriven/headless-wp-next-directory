import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/free-solid-svg-icons/faSearch';

const SearchBox = () => {
	<div className='bg-white shadow p-4 flex'>
		<span className='w-auto flex justify-end items-center text-gray-500 p-2'>
			<a aria-label='search' className='text-3xl'>
				<FontAwesomeIcon icon={faSearch} />
			</a>
		</span>
		<input
			type='text'
			className='w-11/12 rounded p-2'
			placeholder='Try&nbsp;"ethnic&nbsp;media"'
		/>
		<button
			type='button'
			name='search-button'
			className='mx-3 bg-cimaRed hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
		>
			<p className='font-semibold text-xs'>Search</p>
		</button>
	</div>;
};

export default SearchBox;
