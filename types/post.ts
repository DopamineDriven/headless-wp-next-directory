import Author from './author';


interface PostType {
	slug: string;
	title: string;
	date: string;
	featuredImage: {
		node: {
			sourceUrl: string;
		};
	};
	author: Author;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
}

export default PostType;
