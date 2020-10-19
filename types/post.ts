import Author from 'types/author';
import Tag from 'types/tag';
import Category from 'types/category';
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
	categories?: Category[];
	tags: { edges: any[] };
}

export default PostType;
