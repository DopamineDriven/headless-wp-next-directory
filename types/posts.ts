import PostType from './post';
import { Post } from 'wp-graphql';
import { CoverImageProps } from '../components/card-image';

export interface AllPostsProps {
	edges: PostsProps[];
}

export interface PostsProps {
	node: UniquePostFields;
}

export interface UniquePostFields extends Post {
	featuredImage: featureImageType;
	social: socialType;
	author: number & authorType;
}

// export interface excerptType {
// 	node: {
// 		excerpt?: string;
// 	};
// }

export interface featureImageType {
	node: CoverImageProps;
}

export interface socialType {
	facebook: string;
	instagram: string;
	twitter: string;
	website: string;
}

export interface authorType {
	node: authorProps;
}

export interface authorProps {
	name: string;
	firstName: string;
	lastName: string;
	avatar: avatarProps;
}

export interface avatarProps {
	url?: string;
}
