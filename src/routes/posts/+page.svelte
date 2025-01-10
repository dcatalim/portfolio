<script lang="ts">
	import { Input } from "$lib/components/ui/input"
	import PostCard from "$lib/components/PostCard.svelte"

	import { fade } from "svelte/transition"
	import type { Post } from "$lib/types"

	import LoaderCircle from "lucide-svelte/icons/loader-circle"
	import Search from "lucide-svelte/icons/search"

	let { data } = $props()

	// Search query
	let input: string = $state("")
	let query: string = $derived(input.trim())
</script>

<section class="container mx-auto px-4 py-16">
	<!-- Header -->
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">My Posts</h1>
		<p class="mb-12 text-lg text-muted-foreground">
			Discover my latest posts about web development, design, and technology.
		</p>
	</div>

	<!-- Search -->
	<div class="mx-auto mb-12 flex max-w-lg items-center gap-2">
		<div class="relative flex-1">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<Input bind:value={input} type="search" placeholder="Search posts..." class="pl-10" />
		</div>
	</div>

	<!-- Posts Grid -->
	{#await data.posts}
		<LoaderCircle class="mx-auto animate-spin" />
	{:then posts}
		{@const filtered = posts.filter(
			(post: Post) =>
				post.title.toLowerCase().includes(query.toLowerCase()) ||
				post.description.toLowerCase().includes(query.toLowerCase()) ||
				post.categories.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
		)}

		{#if filtered.length > 0}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filtered as post}
					<div in:fade class="overflow-hidden">
						<PostCard {post} />
					</div>
				{/each}
			</div>
		{:else}
			<p class="text-center text-muted-foreground">No posts found</p>
		{/if}
	{/await}
</section>
