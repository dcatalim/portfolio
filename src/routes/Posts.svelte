<script>
	import PostCard from "$lib/components/PostCard.svelte"
	import LoaderCircle from "lucide-svelte/icons/loader-circle"

	let { posts } = $props()
</script>

{#await posts}
	<LoaderCircle class="mx-auto animate-spin" />
{:then posts}
	{#if posts.length > 0}
		<section id="posts" class="container mx-auto px-4 py-20">
			<h2 class="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
				Latest Posts
			</h2>

			<div class="grid gap-8 md:grid-cols-2">
				{#each posts as post}
					<PostCard {post} />
				{/each}
			</div>
		</section>
	{/if}
{/await}
