import React from 'react';
import { getToDos } from './services/toDoService';

const ToDos = () => {
	useEffect(() => {
		async function fetchData() {
			const result = await getToDos();
			console.log(result);
		}

		fetchData();
	});
	
	return (
		<table>
			<thead>
				<tr>
					<th></th>
				</tr>
			</thead>
			
		</table>
	);
};

export default ToDos;