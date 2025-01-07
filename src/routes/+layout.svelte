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
	let { children } = $props()

	// Mobile menu state
	let isMobileMenuOpen: boolean = $state(false)
</script>

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

	<main class="flex-1" in:fade>
		{@render children()}
	</main>

	<Footer />
</div>
