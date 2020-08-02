// export type CategoryProps = {
// 	categories: {
// 		edges: {
// 			node: {name: any} | any;
// 		} | any;
// 	}
// }

export default function Categories({ categories }: any) {
	return (
		<span className='ml-1'>
			under
			{categories.edges.length > 0 ? (
				categories.edges.map((category: any, index: any) => (
					<span key={index} className='ml-1'>
						{category.node.name}
					</span>
				))
			) : (
				<span className='ml-1'>{categories.edges.node.name}</span>
			)}
		</span>
	);
}
