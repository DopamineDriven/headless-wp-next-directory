interface Company {
	name: string | FullName;
	mediaType: string;
	picture: string;
	facebook: string;
	twitter: string;
	instagram: string;
}

interface FullName {
	firstName: string;
	lastName: string;
}

export default Company;
