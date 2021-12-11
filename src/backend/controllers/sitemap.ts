import type { RequestHandler } from '$backend/types/request';

const pages = ['/', '/houses', '/cargo', '/contact', '/machinary', '/offer'];
const laguages = ['en', 'ro'];

const parseLaguages = (page: string) =>
	laguages.map(
		(lang) => `
<xhtml:link rel="alternate" hreflang="${lang}" href="https://ccdeuroservices.ro${page}" />
`
	);

const parsePages = () =>
	pages
		.map(
			(page) => `<url>
<loc>https://ccdeuroservices.ro${page}</loc>
${parseLaguages(page)}
</url>`
		)
		.join('');

export const getSiteMap: RequestHandler = async () => {
	return {
		status: 200,
		body: `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
          ${parsePages()}
        </urlset>
        `
	};
};
