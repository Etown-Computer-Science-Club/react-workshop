import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import { getToDos, updateToDo } from '../services/toDoService';

const ToDos = () => {
	const [toDos, setToDos] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getToDos();
			setToDos(data);
			const newToDo = updateToDo(1, { completed: true })
		}

		fetchData();
	}, []);
	
	return (
		<table className='todosTable'>
			<thead>
				<tr>
					<th>Title</th>
					<th>Completed</th>
				</tr>
			</thead>
			<tbody>
				{toDos.map((toDo) => (
					<ToDo 
						key={toDo.id}
						title={toDo.title}
						completed={toDo.completed}
					/>
				))}
			</tbody>
		</table>
	);
};


				

export default ToDos;