import Author from 'types/author';
import Social from 'types/social';

interface PostType {
	slug: string | number;
	title: string;
	date: string;
	featuredImage: {
		node: {
			sourceUrl: string;
		};
	};
	social: Social;
	author: Author;
	excerpt: string;
	ogImage?: {
		url: string;
	};
	content: string;
	categories?: any[];
	tags: { edges: any[] };
}

export default PostType;
