import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPostsForHomeSorted } from './api';

enum Field {
	'TITLE',
	'DATE'
}

enum Order {
	'ASC',
	'DESC'
}
interface Sorting {
	allPosts: any;
	req: NextApiRequest;
	res: NextApiResponse;
	field: Field;
	order: Order;
	preview: boolean;
	slug: string | number;
}

const userSortedPosts = ({
	allPosts: { edges },
	req,
	res,
	field,
	order,
	preview,
	slug
}: Sorting) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ results: [] }));
};

export default userSortedPosts;
