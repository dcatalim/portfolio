<script lang="ts">
	import Mail from "lucide-svelte/icons/mail"
	import * as Card from "$lib/components/ui/card"

	// import ArrowRight from 'lucide-svelte/icons/arrow-right';
	// import { Button } from '$lib/components/ui/button';
	// import { Input } from '$lib/components/ui/input';
	// import { Label } from '$lib/components/ui/label';
	// import { Textarea } from '$lib/components/ui/textarea';
	// import { toast } from 'svelte-sonner';
	// Contact information
	const contactInfo = [
		// {
		// 	icon: MapPin,
		// 	title: 'Office',
		// 	description: '123 Developer Street, Tech City, 12345'
		// },
		{
			icon: Mail,
			title: "Email",
			description: "hello@dcatalim.com"
		}
		// 	{
		// 		icon: Phone,
		// 		title: 'Phone',
		// 		description: '+1 (555) 123-4567'
		// 	}
	]

	// // Form state
	// let name: string = $state('');
	// let email: string = $state('');
	// let message: string = $state('');

	// let status = $state('');
	// const handleSubmit = async (data) => {
	// 	status = 'Submitting...';
	// 	const formData = new FormData(data.currentTarget);
	// 	const object = Object.fromEntries(formData);
	// 	const json = JSON.stringify(object);

	// 	try {
	// 		const response = await fetch('https://api.web3forms.com/submit', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Accept: 'application/json'
	// 			},
	// 			body: json
	// 		});
	// 		const result = await response.json();

	// 		if (result.success) {
	// 			console.log(result);
	// 			status = result.message || 'Success';
	// 			toast.success(result.message || 'Success');
	// 		}
	// 	} catch (err) {
	// 		status = 'There was an error';
	// 		toast.success(err?.message || 'There was an error');
	// 	}

	// 	name = '';
	// 	email = '';
	// 	message = '';
	// };
</script>

<section class="container mx-auto px-4 py-16">
	<!-- Contact Header -->
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
		<p class="mb-12 text-lg text-muted-foreground">
			Have a question or want to work together? I'd love to hear from you.
		</p>
	</div>

	<div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
		<!-- Contact Information -->
		<div class="col-span-2 flex flex-col space-y-6">
			{#each contactInfo as info}
				<Card.Root>
					<Card.Content>
						<div class="flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
							>
								<info.icon class="h-6 w-6" />
							</div>
							<div>
								<Card.Description>{info.title}</Card.Description>

								<Card.Title class="text-lg">{info.description}</Card.Title>
							</div>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>

		<!-- Contact Form -->
		<!-- <Card.Root>
			<Card.Content class="p-6">
				<form class="space-y-6" onsubmit={handleSubmit}>

					<div class="space-y-2">
						<Label for="name">Name</Label>
						<Input id="name" bind:value={name} placeholder="John Doe" required />
					</div>

					<div class="space-y-2">
						<Label for="email">Email</Label>
						<Input
							id="email"
							type="email"
							bind:value={email}
							placeholder="john@example.com"
							required
						/>
					</div>

					<div class="space-y-2">
						<Label for="message">Message</Label>
						<Textarea
							id="message"
							bind:value={message}
							placeholder="Your message here..."
							class="min-h-[150px]"
							required
						/>
					</div>

					<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

					<Button type="submit" class="w-full">
						Send Message
						<ArrowRight class="ml-2 h-4 w-4" />
					</Button>
				</form>
			</Card.Content>
		</Card.Root> -->
	</div>
</section>
