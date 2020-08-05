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
				categories.edges.map(({ category, index }: CategoryProps) => {
					return (
						<span key={index} className='ml-1 text-success'>
							&num;{category.node.name}
						</span>
					);
				})
			) : (
				<span className='ml-1'>{categories.edges.node.name}</span>
			)}
		</span>
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