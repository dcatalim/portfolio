import type { Post } from "$lib/types.js"
import { config } from '$lib/config';

const site = `https://${config.domain}` // change this to reflect your domain
const pages: string[] = ["contact", "posts"] // populate this with all the slugs you wish to include

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch }) {

	const res = await fetch("api/posts")
	const posts: Post[] = await res.json()

	const body = sitemap(pages, posts)
	const response = new Response(body)
	response.headers.set("Cache-Control", "max-age=0, s-maxage=3600")
	response.headers.set("Content-Type", "application/xml")
	return response
}

const sitemap = (pages: string[], posts: Post[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
		)
		.join("")}

    ${posts
			.map(
				(post) => `
      <url>
        <loc>${site}/posts/${post.slug}</loc>
        <changefreq>weekly</changefreq>
        <lastmod>${post.date}</lastmod>
        <priority>0.5</priority>
      </url>
      `
			)
			.join("")}
</urlset>`
