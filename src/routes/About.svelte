<script>
	import * as Card from "$lib/components/ui/card"

	import Code from "lucide-svelte/icons/code"
	import Laptop from "lucide-svelte/icons/laptop"
	import Server from "lucide-svelte/icons/server"

	const skills = [
		{
			icon: Code,
			title: "Frontend Development",
			description: "Building responsive and interactive user interfaces with modern frameworks."
		},
		{
			icon: Server,
			title: "Backend Development",
			description: "Creating robust and scalable server-side applications."
		},
		{
			icon: Laptop,
			title: "UI/UX Design",
			description: "Designing beautiful and intuitive user experiences."
		}
	]
</script>

<section id="about" class="container mx-auto px-4 py-20">
	<h2 class="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>

	<div class="mb-16 grid gap-8 md:grid-cols-3">
		{#each skills as skill}
			<Card.Root>
				<Card.Content class="flex flex-col items-center p-6 text-center">
					<svelte:component this={skill.icon} class="mb-4 h-12 w-12 text-primary" />
					<h3 class="mb-2 text-xl font-semibold">{skill.title}</h3>
					<p class="text-muted-foreground">{skill.description}</p>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
