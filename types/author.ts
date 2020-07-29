interface Author {
	name?: string;
	firstName?: string;
	lastName?: string;
	mediaType: string;
	avatar: {
		url: string;
	}
	facebook: string;
	twitter: string;
	instagram: string;
}

export default Author;
