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

export async function updateToDo(id, isCompleted) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				completed: isCompleted
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		const data = await response.json();
		return data;
	} catch (e) {
		console.error(e);
		return [];
	}
}