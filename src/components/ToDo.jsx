import React from "react";

const ToDo = (props) => {
	return (
		<tr>
			<td>{props.title}</td>
			<td>{props.completed ? "Yes" : "No"}</td>
		</tr>
	);
};

export default ToDo;
