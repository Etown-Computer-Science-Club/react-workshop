import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import { getToDos, deleteToDo } from '../services/toDoService';

const ToDos = () => {
	const [toDos, setToDos] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getToDos();
			setToDos(data);
		}

		fetchData();
	}, []);

	async function handleDelete(id) {
		const originalToDos = toDos;

		try {
			await deleteToDo(id);

			const newToDos = toDos.filter((toDo) => toDo.id !== id);
			setToDos(newToDos);
		} catch (e) {
			console.error(e);
			setToDos(originalToDos);
		}
	}
	
	return (
		<table className='todosTable'>
			<thead>
				<tr>
					<th>Title</th>
					<th>Completed</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{toDos.map((toDo) => (
					<ToDo
						key={toDo.id}
						id={toDo.id}
						title={toDo.title}
						completed={toDo.completed}
						handleDelete={handleDelete}
					/>
				))}
			</tbody>
		</table>
	);
};


				

export default ToDos;