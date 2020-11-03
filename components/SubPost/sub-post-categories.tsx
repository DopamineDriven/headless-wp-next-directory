import { __TypeEnumValuesArgs } from '../../graphql';
import { AllPostsForCategory_categories_edges } from '../../graphql/__generated__/AllPostsForCategory';
import {
	AllPostsForCategory_categories_edges_node,
	AllPostsForCategory
} from '@graphql/__generated__/AllPostsForCategory';

const SubPostCategories = ({
	categories
}: AllPostsForCategory): JSX.Element => {
	function flatten<AllPostsForCategory>(
		array: (AllPostsForCategory | AllPostsForCategory[])[]
	): AllPostsForCategory[] {
		const flattened: AllPostsForCategory[] = [];
		for (const element of array) {
			if (Array.isArray(element)) {
				flattened.push(...element);
			} else {
				flattened.push(element);
			}
		}
		return flattened;
	}
	const flattened = flatten(
		categories && categories.edges ? categories.edges : []
	);
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{categories &&
				categories.edges &&
				flattened &&
				categories.edges.length > 0 &&
				flattened.length > 0 ? (
					(flattened || categories.edges).map(
						(category: AllPostsForCategory_categories_edges | null, index: number) =>
							category && category.node && category.node.name ? (
								<span
									key={index}
									className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
								>
									#
									{category && category.node && category.node.name
										? category.node.name
										: 'category fetch failed'}
									&nbsp;
								</span>
							) : (
								<span
									key={index}
									className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
								>
									#
									{category && category.node && category.node.name
										? category.node.name
										: category}
									&nbsp;
								</span>
							)
					)
				) : (
					<span className='ml-1'>{'failed to get categories'}</span>
				)}
				)
			</span>
		</div>
	);
};

export default SubPostCategories;
