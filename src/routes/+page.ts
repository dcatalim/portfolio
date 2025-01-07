export async function load({ fetch }) {
	const response = await fetch("api/posts")
	const posts = response.json()
	return { 
		posts,
		title: 'Home',
	}
}
