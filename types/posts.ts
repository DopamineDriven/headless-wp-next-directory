import PostType from './post';
import { Post } from 'wp-graphql';
import { DocumentNode } from 'graphql';

interface PostsProps {
	node: Post;
}

export default PostsProps;
