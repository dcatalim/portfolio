<script lang="ts">
	import "../app.css"
	import { ModeWatcher } from "mode-watcher"
	import { fade, slide } from "svelte/transition"
	import { Button } from "$lib/components/ui/button"
	import { Toaster } from "$lib/components/ui/sonner/index.js"
	import Navigation from "./Navigation.svelte"
	import Footer from "./Footer.svelte"
	import GotoTop from "$lib/components/GotoTop.svelte"

	import Menu from "lucide-svelte/icons/menu"
	import X from "lucide-svelte/icons/x"

	import { page } from "$app/state"
	import { config } from '$lib/config';

	let { children } = $props()

	// Mobile menu state
	let isMobileMenuOpen: boolean = $state(false)
</script>

<svelte:head>
	<title>{page.data.title} | {config.title}</title>
	<meta name="description" content={page.data.description ?? config.description} />
	<meta name="keywords" content={page.data.keywords ?? config.keywords} />

	<meta property="og:url" content={page.url.toString()} />
	<meta property="og:type" content={page.data.type ?? "website"} />
	<meta property="og:title" content={`${page.data.title} | ${config.title}`} />
	<meta property="og:description" content={page.data.description ?? config.description} />
	<meta property="og:image" content={config.image} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content={config.title} />
	

</svelte:head>

<Toaster position="top-center" />

<ModeWatcher />

<GotoTop showAt={600} />

<div
	class=" flex min-h-screen w-full flex-col bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:25px_25px]
text-foreground"
>
	<!-- Mobile Navigation -->
	<div class="fixed right-4 top-4 z-50 md:hidden">
		<Button variant="outline" size="icon" onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}>
			{#if isMobileMenuOpen}
				<X class="h-5 w-5" />
			{:else}
				<Menu class="h-5 w-5" />
			{/if}
		</Button>
	</div>

	{#if isMobileMenuOpen}
		<div
			class="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
			transition:fade={{ duration: 200 }}
		>
			<div transition:slide>
				<Navigation isMobile={true} onClose={() => (isMobileMenuOpen = false)} />
			</div>
		</div>
	{/if}

	<!-- Desktop Navigation -->
	<div class="hidden md:block">
		<Navigation />
	</div>

	<main class="flex-1" transition:fade>
		{@render children()}
	</main>

	<Footer />
</div>
