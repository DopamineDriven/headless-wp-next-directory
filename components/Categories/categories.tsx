// import {
// 	CategoryTyped,
// 	CategoryTypedVariables
// } from 'graphql/__generated__/CategoryTyped';

const Categories = ({ categories }: any): JSX.Element => {
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{categories.edges.length > 0 ? (
					categories.edges.map((category: any, index: any) => (
						<span
							key={index}
							className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
						>
							#{category.node.name}&nbsp;
						</span>
					))
				) : (
					<span className='ml-1'>{categories.edges.node.name}</span>
				)}
			</span>
		</div>
	);
};

export default Categories;

/*

import { CategoryIdType } from '../types/graphql-global-types';
import {
	CategoriesByEdgesReturnName_categories_edges_node as CategoryName,
	CategoriesByEdgesReturnName_categories_edges_node as CategoryEdgesNode,
	CategoriesByEdgesReturnName_categories as CategoriesByEdges,
	CategoriesByEdgesReturnName_categories_edges as CategoriesTyped,
	CategoriesByEdgesReturnName as Category
} from '../graphql/__generated__/CategoriesByEdgesReturnName';

export interface CategoriesProps {
	categories: CategoriesTyped;
	edges: CategoriesByEdges;
	// node: CategoryEdgesNode;
}

export default function Categories({
	categories
}: CategoriesProps): JSX.Element {
	let node: CategoryEdgesNode;
	const { NAME } = CategoryIdType;
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{[categories].length > 0 ? (
					[categories].map((category: CategoriesTyped, index: any) => {
					return	(
							<span
								className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
								key={index}
							>
							#{category}&nbsp;
							</span>
						)
					})
				) : (
					<span className='ml-1'>{categories.node?.name}</span>
				)}
			</span>
		</div>
	);
}




import { isNonNullType } from 'graphql';
import {
	CategoryTyped,
	CategoryTyped_categories,
	CategoryTyped_categories_edges,
	CategoryTypedVariables
} from 'graphql/__generated__/CategoryTyped';

const Categories = ({ categories, category }: CategoryTyped): JSX.Element => {
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{categories?.edges !== null && categories?.edges !== undefined ? (
					categories.edges.map((category: any, index: any) => {
						return (
							<span
								key={index}
								className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
							>
								#{category?.name}&nbsp;
							</span>
						)
					})
				) : (
					<span className='ml-1'>{category?.name}</span>
				)}
			</span>
		</div>
	);
};

export default Cat;
*/

/*
// https://github.com/aliemteam/wp-graphql/blob/master/src/models/categories/types/categoryType.ts
// import {
//     GraphQLInt,
//     GraphQLNonNull,
//     GraphQLObjectType,
//     GraphQLString,
// } from 'graphql';
// import { Meta, TypedFields } from '../../../lib/strongTypes';
import { GraphQLObjectType } from 'graphql';

// export interface Category<TMeta = Meta> {
//     /** Number of published posts for the term. */
//     readonly count: number;
//     /** HTML description of the term. */
//     description: string;
//     /** Unique identifier for the term. */
//     readonly id: number;
//     /** URL of the term. */
//     readonly link: string;
//     /** The expected shape of the category meta fields. */
//     meta: TMeta;
//     /** HTML title for the term. */
//     name: string;
//     /** The parent term ID. */
//     parent: number;
//     /** An alphanumeric identifier for the term unique to its type. */
//     slug: string;
//     /** Type attribution for the term. */
//     taxonomy: 'category'|'post_tag'|'nav_menu'|'link_category'|'post_format';
// }

// const categoryFields: TypedFields<Category> = {
//     count: {
//         description: 'Number of published posts for the term.',
//         type: GraphQLInt,
//     },
//     description: {
//         description: 'HTML description of the term.',
//         type: GraphQLString,
//     },
//     id: {
//         description: 'Unique identifier for the term.',
//         type: new GraphQLNonNull(GraphQLInt),
//     },
//     link: {
//         description: 'URL of the term.',
//         type: GraphQLString,
//     },
//     meta: {
//         description: 'JSON stringified meta fields.',
//         type: GraphQLString,
//         resolve: category => JSON.stringify(category.meta),
//     },
//     name: {
//         description: 'HTML title for the term.',
//         type: GraphQLString,
//     },
//     parent: {
//         description: 'The parent term ID.',
//         type: GraphQLInt,
//     },
//     slug: {
//         description: 'An alphanumeric identifier for the term unique to its type.',
//         type: GraphQLString,
//     },
//     taxonomy: {
//         description: 'Type attribution for the term.',
//         type: GraphQLString,
//     },
// };

// export default new GraphQLObjectType({
//     name: 'Category',
//     description: 'A single category.',
//     fields: () => ({
//         ...categoryFields,
//     }),
// });
