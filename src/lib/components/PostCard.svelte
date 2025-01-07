<script lang="ts">
	import Calendar from 'lucide-svelte/icons/calendar'
	import Clock from 'lucide-svelte/icons/clock'
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	// post props
	let { post } = $props();

</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="line-clamp-2 text-xl">{post.title}</Card.Title>
		<Card.Description class="flex items-center gap-4 text-sm">
			<span class="flex items-center gap-1">
				<Calendar class="h-4 w-4" />
				{post.date}
			</span>
			<span class="flex items-center gap-1">
				<Clock class="h-4 w-4" />
				{post.readTime}
			</span>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each post.categories as tag}
				<Badge variant="secondary">{tag}</Badge>
			{/each}
		</div>
	</Card.Content>
	<Card.Footer>
		<Button variant="outline" class="w-full" href={`/posts/${post?.slug}`} >Read More</Button>
	</Card.Footer>
</Card.Root>
