import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { Fragment, ChangeEvent, SyntheticEvent } from 'react';
import { PostsProps } from '../../types/posts';
import {
	AllCategories,
	AllCategories_categories,
	AllCategories_categories_edges
} from '../../graphql/__generated__/AllCategories';
import { AllTags_tags_edges } from '../../graphql/__generated__/AllTags';

interface Props {
	selectChange: (evt: SyntheticEvent) => void;
	selectSearch: string;
	filterFunc: (evt: SyntheticEvent) => void;
	allPosts: PostsProps[];
	tags: AllTags_tags_edges[] | null;
	dropdownOptions: string[];
	categories: AllCategories_categories_edges[] | null;
}

const SearchBox = ({
	selectChange,
	selectSearch,
	filterFunc,
	allPosts,
	dropdownOptions,
	tags,
	categories
}: Props): JSX.Element => {
	console.log('categories prop: ', categories);
	console.log('tags props: ', tags);

	const categoriesMapped: JSX.Element | (JSX.Element | null)[] = categories ? (
		categories.map((category, index) => {
			if (category.node === null) {
				return null;
			}
			return (
				<li key={index} className='mr-1'>
					<a
						href={
							process.env.NODE_ENV === 'development'
								? `http://localhost:4000/category/${category.node.name}`
								: `https://headless-wp-next-directory.vercel.app/category/${category.node.name}`
						}
						className='block align-bottom min-h-auto font-semibold border-t border-l rounded-t px-mdmxSocial border-r-custom text-primary bg-primary'
						data-categoryname={category.node.name}
					>
						{category.node.name}
					</a>
				</li>
			);
		})
	) : (
		<li>no categories</li>
	);

	console.log(dropdownOptions);
	return (
		<Fragment>
			<div className='mx-portfolio'>
				<div className='flex-row w-auto overflow-x-hidden overflow-y-hidden mb-portfolio'>
					<div className='flex w-auto'>
						<ul className='flex w-full'>{categoriesMapped}</ul>
					</div>
					<div className='flex p-2 mb-3 shadow-2xl bg-primary border-auxiliary'>
						<div className='relative flex w-auto h-auto py-2'>
							<select
								onChange={selectChange}
								aria-label='search options'
								value={selectSearch}
								className='h-auto leading-tight bg-primary border text-customFooter border-gray-400 rounded shadow hover:border-gray-500 focus:outline-none focus:shadow-outline'
							>
								{dropdownOptions.map((dropDownOption, index) => {
									return (
										<option key={index} value={dropDownOption}>
											{dropDownOption}
										</option>
									);
								})}
							</select>
						</div>
						<div className='flex w-full'>
							<span className='flex items-center justify-end w-auto p-2 text-primary' />
							<label className='text-2xl text-primary align-middle'></label>
							<input
								type='text'
								aria-label='search field'
								className='w-full p-portfolioDivider rounded bg-primary text-primary'
								placeholder='Search...'
								name='search-form'
								onChange={filterFunc}
							/>

							<button
								type='submit'
								name='search-button'
								className='px-2 py-1 ml-2 font-bold text-primary bg-primary align-middle transition-colors duration-500 border-black rounded-full shadow-xl md:px-2 sm:px-2 lg:px-2 lg:mb-0'
							>
								<a aria-label='search' className='text-md'>
									{<FontAwesomeIcon icon={faSearch} />}
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default SearchBox;
