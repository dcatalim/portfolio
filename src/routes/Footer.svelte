<script>
	import Github from "lucide-svelte/icons/github"
	import Linkedin from "lucide-svelte/icons/linkedin"
	import Mail from "lucide-svelte/icons/mail"

	const socialLinks = [
		{ icon: Github, href: "https://github.com/supra1302", label: "GitHub" },
		{ icon: Linkedin, href: "https://www.linkedin.com/in/davidcatalim/", label: "LinkedIn" },
		{ icon: Mail, href: "mailto:hello@dcatalim.com", label: "Email" }
	]
</script>

<!-- <footer id="contact" class="border-t bg-muted/50"> -->
<footer id="contact" class="">
	<div class="container mx-auto px-4 py-12">
		<div class="flex w-full justify-center gap-4">
			{#each socialLinks as link}
				<a
					href={link.href}
					class="text-muted-foreground transition-colors hover:text-primary"
					aria-label={link.label}
					target="_blank"
					rel="noreferrer noopener"
				>
					<svelte:component this={link.icon} class="h-5 w-5" />
				</a>
			{/each}
		</div>

		<div class="mt-8 text-center text-sm text-muted-foreground">
			© {new Date().getFullYear()} David Catalim. All rights reserved.
		</div>
	</div>
</footer>
