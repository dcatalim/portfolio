<script>
	import * as Card from "$lib/components/ui/card"
	import { Badge } from "$lib/components/ui/badge"
	import { Button } from "$lib/components/ui/button"
	import { ScrollArea } from "$lib/components/ui/scroll-area"

	import Github from "lucide-svelte/icons/github"
	import ExternalLink from "lucide-svelte/icons/external-link"

	import NovaTechClub from "$lib/assets/NovaTechClub.png?enhanced"
	import Lusolex from "$lib/assets/Lusolex.png?enhanced"
	import TeamOnSync from "$lib/assets/teamonsync.png?enhanced"
	import BrunosPizzeria from "$lib/assets/BrunosPizzeria.png?enhanced"
	import GroupVarietySolutions from "$lib/assets/GroupVarietySolutions.png?enhanced"
	import Infoteste from "$lib/assets/Infoteste.png?enhanced"
	import LivrariadaLapa from "$lib/assets/LivrariadaLapa.png?enhanced"
	import LLMResearch from "$lib/assets/LLMResearch.png?enhanced"

	const projects = [
		{
			title: "LLM Research",
			description:
				"A research project focused on evaluating the capabilities of Large Language Models in various tasks.",
			date: "Oct. 2025",
			image: LLMResearch,
			tags: ["SvelteKit", "AI SDK", "Pocketbase"],
			github: "https://github.com/dcatalim/llm-research",
			demo: ""
		},

		{
			title: "Lusolex",
			description: "Full-stack application to enable case-law search with Artificial Intelligence.",
			date: "Jun. 2025",
			image: Lusolex,
			tags: ["SvelteKit", "AI SDK", "Vector DB"],
			github: "",
			demo: ""
		},

		{
			title: "TeamOnSync",
			description: "Webapp to manage your team on the go.",
			date: "Jan. 2025",
			image: TeamOnSync,
			tags: ["SvelteKit", "Pocketbase", "Shadcn"],
			github: "https://github.com/dcatalim/teamonsync",
			demo: ""
		},

		{
			title: "Nova Tech Club",
			description:
				"A modern web application that allows academic publications and sharing projects & events.",
			date: "Nov. 2024",
			image: NovaTechClub,
			tags: ["Svelte", "Pocketbase", "Tailwind"],
			github: "https://github.com/dcatalim/novatechclub",
			demo: "https://techclubnova.com/"
		},
		{
			title: "Group Variety Solutions",
			description: "Institutional website for a services firm.",
			date: "Jun. 2024",
			image: GroupVarietySolutions,
			tags: ["HTML", "CSS", "Bootstrap"],
			github: "",
			demo: "https://groupvarietysolutions.com"
		},
		{
			title: "Livraria da Lapa",
			description: "Full-stack E-commerce store for a bookshop.",
			date: "Feb. 2024",
			image: LivrariadaLapa,
			tags: ["HTML", "CSS", "Prestashop"],
			github: "",
			demo: "https://livrariadalapa.com"
		},
		{
			title: "Brunos Pizzeria",
			description: "E-commerce store for a pizzeria with online orders.",
			date: "Dez. 2023",
			image: BrunosPizzeria,
			tags: ["Wordpress", "Woocommerce"],
			github: "",
			demo: "https://brunospizzeria.ch"
		},
		{
			title: "Infoteste",
			description: "Institutional website for a psychology evaluation firm.",
			date: "Jun. 2023",
			image: Infoteste,
			tags: ["HTML", "CSS", "Bootstrap"],
			github: "",
			demo: "https://preview.infoteste.pt"
		}
	]
</script>

<section id="projects" class="container mx-auto px-4 py-20">
	<h2 class="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>

	<div class="grid gap-8 md:grid-cols-2">
		{#each projects as project}
			<Card.Root>
				<Card.Header>
					<ScrollArea class="aspect-video w-full overflow-hidden rounded-lg">
						<enhanced:img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover object-top"
						/>
					</ScrollArea>

					<!-- <div class="aspect-video w-full overflow-hidden rounded-lg">
						<enhanced:img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover object-top"
						/>
					</div> -->
					<div class="flex w-full items-baseline justify-between">
						<Card.Title class="pt-2">{project.title}</Card.Title>
						<Badge variant="outline">{project?.date}</Badge>
					</div>
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
					{#if project.demo}
						<Button size="sm" href={project.demo} target="_blank" rel="noreferrer noopener">
							<ExternalLink class="mr-2 h-4 w-4" />
							Demo
						</Button>
					{/if}
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</section>
