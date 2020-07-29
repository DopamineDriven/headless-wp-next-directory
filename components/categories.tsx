interface Props {
	categories: any;
}

const Categories = ({ categories }: Props) => {
	return (
		<span className='ml-1'>
			under
			{categories.edges.length > 0 ? (
				categories.edges.map((category: any, index: any) => {
					<span key={index} className='ml-1'>
						{category.node.name}
					</span>
				})
			) : (
				<span className='ml-1'>{categories.edges.node.name}</span>
			)}
		</span>
	);
};

export default Categories;

// edges, nodes, and their respective types
// https://github.com/uber/react-digraph#oncreatenode

// useful react prop types
// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#useful-react-prop-type-examples
