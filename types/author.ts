interface Author {
	name: string | FullName;
	mediaType: string;
	avatar: {
		url: string;
	};
	// facebook: string;
	// twitter: string;
	// instagram: string;
}

interface FullName {
	firstName: string;
	lastName: string;
}

export default Author;
