# David Catalim Portfolio

Personal portfolio website built with SvelteKit, TypeScript, Tailwind CSS, and mdsvex.

The site includes:

- Home page sections for Hero, About, Projects, and recent Posts
- A blog system powered by `.svx` files in `src/posts`
- Dynamic post pages at `/posts/[slug]`
- RSS feed at `/rss.xml`
- Sitemap at `/sitemap.xml`
- Contact page with Web3Forms integration

## Tech Stack

- SvelteKit + Svelte 5
- TypeScript
- Tailwind CSS
- mdsvex
- lucide-svelte
- svelte-sonner

## Project Structure

- `src/routes/+page.svelte`: Home page composition
- `src/routes/posts`: Blog list and post routes
- `src/routes/api/posts/+server.ts`: Loads and returns published posts from `src/posts/*.svx`
- `src/routes/rss.xml/+server.ts`: RSS feed generation
- `src/routes/sitemap.xml/+server.ts`: Sitemap generation
- `src/routes/contact/+page.svelte`: Contact form UI and submit logic
- `src/lib/config.ts`: Site metadata (title, description, domain)

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

This key is used by the contact form to submit messages through Web3Forms.

### 3. Run development server

```bash
pnpm dev
```

### 4. Build and preview

```bash
pnpm build
pnpm preview
```

## Author

David Catalim
