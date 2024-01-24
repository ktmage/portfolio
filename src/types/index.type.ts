type Thumbnail = {
	url: string;
	height: number;
	width: number;
};

type Content = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	content: string;
	thumbnail: Thumbnail;
};

type RootObject = {
	contents: Content[];
	totalCount: number;
	offset: number;
	limit: number;
};

export type { RootObject, Content, Thumbnail };
