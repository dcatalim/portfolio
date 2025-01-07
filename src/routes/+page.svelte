<script lang="ts">
	import Hero from "./Hero.svelte"
	import About from "./About.svelte"
	import Projects from "./Projects.svelte"
	import Posts from "./Posts.svelte"

	let { data } = $props()
</script>

<Hero />
<About />
<Projects />
<Posts posts={data.posts} />
