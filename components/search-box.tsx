import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';
import Container from './container';
import CategoryProps from '../types/category';
import TagProps from '../types/tag';
import { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
	selectChange: (evt: SyntheticEvent) => void;
	selectSearch: string;
	filterFunc: (evt: SyntheticEvent) => void;
	allPosts: any;
	tags: TagProps[];
	dropdownOptions: string[];
	categories: CategoryProps[];
	handleCategoryClick: (evt: SyntheticEvent) => void;
}

const SearchBox = ({
	selectChange,
	selectSearch,
	filterFunc,
	allPosts,
	dropdownOptions,
	tags,
	categories,
	handleCategoryClick
}: Props) => {
	// const handleTabSearch = tabName => {};
	console.log(dropdownOptions);
	return (
		<Container>
			<div className='mt-4 flex-row w-auto overflow-y-hidden mb-4 text-sm overflow-x-scroll'>
				<div className='flex w-auto'>
					<ul className='w-full flex border-b'>
						{categories.map((category, index) => {
							return (
								<li key={index} className='mr-1'>
									<a
										href='#'
										onClick={handleCategoryClick}
										className='bg-gray-300 inline-block h-auto border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold'
										data-categoryname={category.node.name}
									>
										{category.node.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='flex bg-white shadow-2xl p-2 mb-3'>
					<div className='flex w-auto py-2 h-auto relative'>
						<select
							onChange={selectChange}
							value={selectSearch}
							className='appearance-none w-full h-auto bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight mx--5 focus:outline-none focus:shadow-outline'
						>
							{dropdownOptions.map((dropDownOption, index) => {
								return (
									<option key={index} value={dropDownOption}>
										{dropDownOption}
									</option>
								);
							})}
						</select>
						<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700'>
							{<FontAwesomeIcon icon={faSortDown} />}
						</div>
					</div>
					<div className='flex w-full'>
						<span className='w-auto flex justify-end items-center text-gray-500 p-2' />
						<label className='text-black text-2xl align-middle'></label>
						<input
							type='text'
							className='w-full rounded'
							placeholder='Search...'
							name='search-form'
							onChange={filterFunc}
						/>

						<button
							type='submit'
							name='search-button'
							className='hover:bg-white align-middle shadow-xl rounded-full bg-black hover:text-black border border-black text-white font-bold py-1 px-2 md:px-2 sm:px-2 lg:px-2 duration-500 transition-colors lg:mb-0'
						>
							<a aria-label='search' className='text-md'>
								{<FontAwesomeIcon icon={faSearch} />}
							</a>
						</button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default SearchBox;
