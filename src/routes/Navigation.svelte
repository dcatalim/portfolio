<script lang="ts">
	import { page } from "$app/state"
	import { cn } from "$lib/utils"

	import Sun from "lucide-svelte/icons/sun"
	import Moon from "lucide-svelte/icons/moon"

	import { toggleMode } from "mode-watcher"
	import { Button } from "$lib/components/ui/button/index.js"

	// Props for mobile navigation
	let { isMobile = false, onClose }: { isMobile?: boolean; onClose?: () => void } = $props()

	// Navigation items
	const navItems = [
		{ href: "/#about", label: "About" },
		{ href: "/#projects", label: "Projects" },
		{ href: "/posts", label: "Posts" },
		{ href: "/contact", label: "Contact" }
	]
</script>

<nav
	class={cn(
		"container mx-auto p-4",
		isMobile ? "flex flex-col items-center gap-8 pt-20" : "flex items-center justify-between"
	)}
>
	<a href="/" class="text-xl font-bold" onclick={onClose}>
		David
		<span class="text-primary">Catalim</span>
	</a>

	<ul class={cn("flex gap-8", isMobile ? "flex-col items-center text-lg" : "items-center")}>
		{#each navItems as item}
			<li>
				<a
					href={item.href}
					class="transition-colors hover:text-primary {page.url.pathname === item.href
						? 'underline'
						: ''}"
					onclick={onClose}
				>
					{item.label}
				</a>
			</li>
		{/each}
		<Button onclick={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</ul>
</nav>
