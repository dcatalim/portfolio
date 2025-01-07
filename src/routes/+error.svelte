<script lang="ts">
    import { page } from '$app/state';
    import { Button } from "$lib/components/ui/button"
    
    import ArrowLeft from 'lucide-svelte/icons/arrow-left'
    import Home from 'lucide-svelte/icons/home'
</script>
    <main class="relative z-10 flex flex-1 items-center justify-center px-4 py-16">
		<div class="text-center">
			<!-- 404 Title -->
			<h1 class="mb-4 text-9xl font-black tracking-tight text-primary">{page.status ?? '404'}</h1>

			<!-- Message -->
			<h2 class="mb-2 text-3xl font-bold">{page.error?.message ?? 'Page Not Found'}</h2>
			<p class="mb-8 text-lg text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>

			<!-- Action Buttons -->
			<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
				<Button onclick={() => history.back()} variant="outline" class="gap-2">
					<ArrowLeft class="h-4 w-4" />
					Go Back
				</Button>
				<Button href="/" class="gap-2">
					<Home class="h-4 w-4" />
					Back to Home
				</Button>
			</div>
		</div>
	</main>