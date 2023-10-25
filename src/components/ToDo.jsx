import React from "react";

const ToDo = (props) => {
	return (
		<tr>
			<td>{props.title}</td>
			<td>
				<input type="checkbox" checked={props.completed} />
			</td>
			<td>
				<button onClick={() => props.handleDelete(props.id)} className="deleteBtn">
					Delete
				</button>
			</td>
		</tr>
	);
};

export default ToDo;
