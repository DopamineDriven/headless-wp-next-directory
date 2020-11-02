import PostType from './post';
import { Post } from 'wp-graphql';
import { CoverImageProps } from '../components/Card/card-featured-image';

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
	facebook: string | null;
	instagram: string | null;
	twitter: string | null;
	website: string | null;
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
