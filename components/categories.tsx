// type CategoriesProps = {
// 	categories: {
// 		edges: any;
// 	} | any;
// };

// type CategoryProps = {
// 	category: any;
// 	index: any;
// }

// DocumentNode from graphql
// Category from wp-graphql

export default function Categories({ categories }: any) {
	return (
		<div className="max-w-2xl mx-auto text-center flex flex-row justify-center mt-2">
			<span className='text-xs text-center'>
				{categories.edges.length > 0 ? (
					categories.edges.map((category: any, index: any) => (
						<span
							key={index}
							className='inline-block bg-gray-400 rounded-full px-3 py-1 my-1 text-sm font-semibold text-black mr-2'
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
}

/*
type CategoriesProps = {
	categories: {
		edges: any;
	} | any;
};

type CategoryProps = {
	category: any;
	index: any;
}

export default function Categories({ categories }: CategoriesProps) {
	return (
		<span className='ml-1'>
			under
			{categories.edges.length > 0 ? (
				categories.edges.map(({category, index}: CategoryProps) => {
					return category.node.name.length > 1 ? (
						<span key={index} className='ml-1'>
							{category.node.name},
						</span>
					) : (
						<span key={index} className='ml-1'>
							{category.node.name}
						</span>
					);
				})
			) : (
				<span className='ml-1'>{categories.edges.node.name}</span>
			)}
		</span>
	);
}

*/
