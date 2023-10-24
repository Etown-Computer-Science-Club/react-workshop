export async function getToDos() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await response.json();
		return data;
	} catch (e) {
		console.error(e);
		return [];
	}
}