import { Category } from 'wp-graphql';
import { DocumentNode } from 'graphql';

interface CategoryProps {
	node: DocumentNode & Category;
}

// import { Category } from 'wp-graphql';
// import { DocumentNode } from 'graphql';

// interface Category {
// 	edges: {
// 		node: {
// 			name: string;
// 		};
// 	};
// }

export default CategoryProps;
