<script>
	import Typewriter from "$lib/components/Typewriter.svelte"
	import { Button } from "$lib/components/ui/button"

	import ArrowRight from "lucide-svelte/icons/arrow-right"
</script>

<section class="container mx-auto flex min-h-[calc(100vh-80px)] items-center px-4 py-20">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mb-6 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
			<Typewriter>Welcome to my portfolio</Typewriter>
			<!-- <span class="text-primary">Modern Technologies</span> -->
		</h1>
		<p class="mb-8 text-lg text-muted-foreground md:text-xl">
			My name is <span class="text-primary">David Catalim</span> and I develop websites with multiple
			technologies, you can find more about my projects below:
		</p>
		<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
			<Button size="lg" href="#projects">
				View Projects
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button variant="outline" size="lg" href="/contact">Contact Me</Button>
		</div>
	</div>
</section>
