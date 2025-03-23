<script lang="ts">
	let { children } = $props()
</script>

<div class="typewriter">
	<div>
		<p>
			{@render children()}
		</p>
	</div>
</div>

<style>
	.typewriter {
		display: flex;
		justify-content: center;
	}

	.typewriter p {
		/* font-family: monospace; */
		/* font-size: 1.5rem; */
		margin-inline: auto;
		overflow: hidden;
		/* Keeps on a single line */
		white-space: nowrap;
		/* The cursor */
		border-right: 1px solid;
		/* steps = number of characters */
		animation:
			typing 3s steps(22) forwards,
			blink 1s step-end infinite;
	}

	@keyframes typing {
		from {
			width: 0;
		}

		to {
			width: 100%;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>
