async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

	// Your async/await code here
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const posts = await response.json();
		console.log(posts);
	} catch (error) {
		console.error(error);
	}
}

// Call the function to fetch posts
fetchPosts();