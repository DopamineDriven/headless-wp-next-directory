import Company from './company';

interface PostType {
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	client: Company;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
}

export default PostType;
