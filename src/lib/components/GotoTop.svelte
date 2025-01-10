<script>
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import { Button } from '$lib/components/ui/button';

	let { showAt = 1000 } = $props();

	let scrollHeight = $state(0);

	const gotoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	let showGotoTop = $derived(scrollHeight > showAt);
</script>

{#if showGotoTop}
	<Button variant="outline" size="icon" onclick={gotoTop} class="fixed bottom-4 right-4  z-50"  aria-label='Go to top'>
		<ChevronUp class="size-4 " />
	</Button>
{/if}

<svelte:window bind:scrollY={scrollHeight} />