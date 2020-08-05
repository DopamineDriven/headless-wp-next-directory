import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';

// https://tailwindtemplates.io/search/#230

interface Props {
	allPosts: any;
	dropdownOptions: string[];
}

const SearchBox = ({ allPosts, dropdownOptions }: Props) => {
	return (
		<div className='p-4 mt-4'>
			<div className='flex'>
				<ul className='w-1 flex border-b'>
					{dropdownOptions.map((value, index) => {
						return (
							<li key={index} className='mr-1'>
								<a className='bg-gray-300 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold'>
									{value}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='flex bg-white shadow-2xl p-4 mb-3'>
				<div className='flex w-1/4 inline-block relative w-64'>
					<select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 mt-4 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
						{dropdownOptions.map((value, index) => {
							return <option key={index}>{value}</option>;
						})}
					</select>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700'>
						{<FontAwesomeIcon icon={faSortDown} />}
					</div>
				</div>
				<div className='flex w-3/4 md:mt-6 sm:mt-4 mb-2'>
					<span className='w-auto flex justify-end items-center text-gray-500 p-2' />
					<label className='text-black text-2xl align-middle mx-2 pt-3'></label>
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
			</div>
		</div>
	);
};

export default SearchBox;
