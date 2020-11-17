import { __TypeEnumValuesArgs } from '../../graphql';
import {
	allPostsFields,
	allPostsFields_categories_edges
} from '../../graphql/__generated__/allPostsFields';
// import {
// 	AllPostsForCategory_categories_edges_node,
// 	AllPostsForCategory
// } from '@graphql/__generated__/AllPostsForCategory';

const SubPostCategories = ({ categories }: allPostsFields) => {
	console.log('catergories sub post: ', categories);
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{categories != null &&
				categories.edges != null &&
				categories.edges.length > 0 ? (
					categories.edges.map(
						(category: allPostsFields_categories_edges | null, index: number) => (
							<span
								key={index}
								className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
							>
								#
								{category != null && category.node != null && category.node.name != null
									? category.node.name
									: `${typeof category?.node?.name} returned null or undefined`}
							</span>
						)
					)
				) : (
					<span>
						{categories != null &&
						categories.edges != null &&
						categories.edges.length > 0
							? categories.edges.flatMap((category, index: number) => (
									<span
										key={index}
										className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
									>
										#
										{category != null &&
										category.node != null &&
										category.node.name != null
											? category.node.name
											: `${typeof category?.node
													?.name} flattened map returned null or undefined`}
									</span>
							  ))
							: `${console.log('failed to return categories')}`}
					</span>
				)}
			</span>
		</div>
	);
};

/*
type Props = {categories: { edges?: any[] | { node: {name: string} }}}
export default function Categories({ categories } : Props) {
  const {edges} = categories;
  return (
    <span className="ml-1">
      under
      {Array.isArray(edges) ? (
        edges.map((category, index) => (
          <span key={index} className="ml-1">
            {category?.node?.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{edges?.node?.name}</span>
      )}
    </span>
  )
}
*/

// const SubPostCategories = ({
// 	categories
// }: AllPostsForCategory): JSX.Element => {
// 	function flatten<AllPostsForCategory>(
// 		array: (AllPostsForCategory | AllPostsForCategory[])[]
// 	): AllPostsForCategory[] {
// 		const flattened: AllPostsForCategory[] = [];
// 		for (const element of array) {
// 			if (Array.isArray(element)) {
// 				flattened.push(...element);
// 			} else {
// 				flattened.push(element);
// 			}
// 		}
// 		return flattened;
// 	}
// 	const flattened = flatten(
// 		categories && categories.edges ? categories.edges : []
// 	);
// 	return (
// 		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
// 			<span className='text-xs text-center'>
// 				{categories &&
// 				categories.edges &&
// 				flattened &&
// 				categories.edges.length > 0 &&
// 				flattened.length > 0 ? (
// 					(flattened || categories.edges).map(
// 						(category: AllPostsForCategory_categories_edges | null, index: number) =>
// 							category && category.node && category.node.name ? (
// 								<span
// 									key={index}
// 									className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
// 								>
// 									#
// 									{category && category.node && category.node.name
// 										? category.node.name
// 										: 'category fetch failed'}
// 									&nbsp;
// 								</span>
// 							) : (
// 								<span
// 									key={index}
// 									className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
// 								>
// 									#
// 									{category && category.node && category.node.name
// 										? category.node.name
// 										: category}
// 									&nbsp;
// 								</span>
// 							)
// 					)
// 				) : (
// 					<span className='ml-1'>{'failed to get categories'}</span>
// 				)}
// 				)
// 			</span>
// 		</div>
// 	);
// };

export default SubPostCategories;
