import PostType from './post';

interface Posts {
	edges: {
		node: PostType[];
	};
}

export default Posts;
