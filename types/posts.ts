import PostType from './post';
import { Post } from 'wp-graphql';
import { DocumentNode } from 'graphql';

interface PostsProps {
	node: DocumentNode & Post;
}

export default PostsProps;
