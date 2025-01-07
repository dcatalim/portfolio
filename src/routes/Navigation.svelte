<script lang="ts">
	import { page } from "$app/state"
	import { cn } from "$lib/utils"

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
	</ul>
</nav>
