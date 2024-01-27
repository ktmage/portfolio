type Eyecatch = {
	url: string;
	height: number;
	width: number;
};

type WorkContent = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	thumbnail: Eyecatch;
};

type WorkObject = {
	contents: WorkContent[];
	totalCount: number;
	offset: number;
	limit: number;
};

type Category = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	name: string;
};

type BlogContent = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	eyecatch: Eyecatch;
	category: Category;
};

type BlogObject = {
	contents: BlogContent[];
	totalCount: number;
	offset: number;
	limit: number;
};

export type { WorkObject, WorkContent, Eyecatch, BlogObject, BlogContent, Category };
