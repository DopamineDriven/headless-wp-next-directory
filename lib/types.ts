export interface previewPostArgs {
	id: string;
	idType: string;
}

export interface allPostsForHomeAlphabeticalArgs {
	preview: boolean;
	field?: string;
	order?: string;
}

export interface getPostAndMorePostsArgs {
	slug: string | number;
	preview: boolean;
	previewData: any;
}
