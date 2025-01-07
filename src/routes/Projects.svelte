<script>
	import * as Card from "$lib/components/ui/card"
	import { Badge } from "$lib/components/ui/badge"
	import { Button } from "$lib/components/ui/button"

	import Github from "lucide-svelte/icons/github"
	import ExternalLink from "lucide-svelte/icons/external-link"

	import ntcImg from '$lib/assets/NovaTechClub.png?enhanced'
	import jurisImg from '$lib/assets/jurisbase.png?enhanced'

	const projects = [
		{
			title: "Nova Tech Club Website",
			description: "A modern web application built with Svelte and TypeScript.",
			image: ntcImg,
			tags: ["Svelte", "Pocketbase", "Tailwind"],
			github: "https://github.com/supra1302/nova-tech-club-website",
			demo: "https://novatechclub.pages.dev/"
		},
		{
			title: "Case-law Search Platform",
			description: "Full-stack application to enable case-law search.",
			image: jurisImg,
			tags: ["SvelteKit", "AI", "Drizzle"],
			github: "",
			demo: "https://jurisbase.dcatalim.com"
		}
	]
</script>

<section id="projects" class="container mx-auto px-4 py-20">
	<h2 class="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
		Featured Projects
	</h2>

	<div class="grid gap-8 md:grid-cols-2">
		{#each projects as project}
			<Card.Root>
				<Card.Header>
					<div class="aspect-video w-full overflow-hidden rounded-lg">
						<enhanced:img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover object-top"
						/>
					</div>
					<Card.Title class="pt-2">{project.title}</Card.Title>
				</Card.Header>
				<Card.Content>
					<p class="mb-4 text-muted-foreground">{project.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<Badge variant="secondary">{tag}</Badge>
						{/each}
					</div>
				</Card.Content>
				<Card.Footer class="flex gap-4">
					{#if project.github}
						<Button
							variant="outline"
							size="sm"
							href={project.github}
							target="_blank"
							rel="noreferrer noopener"
						>
							<Github class="mr-2 h-4 w-4" />
							Code
						</Button>
					{/if}
					<Button size="sm" href={project.demo} target="_blank" rel="noreferrer noopener">
						<ExternalLink class="mr-2 h-4 w-4" />
						Demo
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</section>
