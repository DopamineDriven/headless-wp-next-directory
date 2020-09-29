import { Tag } from 'wp-graphql';
import { DocumentNode } from 'graphql';

interface TagProp {
	node: DocumentNode & Tag;
}

interface TagProps {
	node: DocumentNode & UniqueTag;
}

interface UniqueTag extends Tag {
	databaseid: string;
	posts: [];
}

// interface Tag {
// 	edges: {
// 		node: {
// 			name: string;
// 		};
// 	};
// }

export default TagProps;
