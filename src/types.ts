export interface SiteConfig {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
	webmentions?: {
		link: string;
		pingback?: string;
	};
	sortPostsByUpdatedDate: boolean;
}

export interface PaginationLink {
	url: string;
	text?: string;
	srLabel?: string;
}

export interface SiteMeta {
	title: string;
	description?: string;
	ogImage?: string | undefined;
	articleDate?: string | undefined;
}

/** Webmentions */
export interface WebmentionsFeed {
	type: string;
	name: string;
	children: WebmentionsChildren[];
}

export interface WebmentionsCache {
	lastFetched: null | string;
	children: WebmentionsChildren[];
}

export interface WebmentionsChildren {
	type: string;
	author: Author | null;
	url: string;
	published?: null | string;
	"wm-received": string;
	"wm-id": number;
	"wm-source": string;
	"wm-target": string;
	"wm-protocol": string;
	syndication?: null | string[];
	content?: Content | null;
	"mention-of": string;
	"wm-property": string;
	"wm-private": boolean;
	rels?: Rels | null;
	name?: null | string;
	photo?: null | string[];
	summary?: Summary | null;
}

export interface Author {
	type: string;
	name: string;
	photo: string;
	url: string;
}

export interface Content {
	"content-type": string;
	value: string;
	html: string;
	text: string;
}

export interface Rels {
	canonical: string;
}

export interface Summary {
	"content-type": string;
	value: string;
}
