import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPostsForHomeSorted } from './api';

interface Sorting {
	allPosts: any;
	req: NextApiRequest;
	res: NextApiResponse;
	field: string;
	order: string;
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
