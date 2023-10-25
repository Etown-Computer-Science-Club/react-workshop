import React, { useState } from 'react';

const ToDos = () => {
	const [toDos, setToDos] = useState([
		{
			userId: 1,
			id: 1,
			title: 'delectus aut autem',
			completed: false,
		},
		{
			userId: 1,
			id: 2,
			title: 'quis ut nam facilis et officia qui',
			completed: false,
		},
		{
			userId: 1,
			id: 3,
			title: 'fugiat veniam minus',
			completed: false,
		},
	]);
	
	return (
		<div>

		</div>
	);
};

export default ToDos;