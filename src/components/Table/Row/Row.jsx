import React from "react";

export default function Row({ user, deleteUserHandler }) {
	return (
		<tr className="row">
			<td>
				<div>
					<button
						type="button"
						className="buttonRow"
						onClick={() => deleteUserHandler(user.id)}
					></button>
					{user.fullName}
				</div>
			</td>
			<td>{user.id}</td>
			<td>{user.surname}</td>
			<td>{user.name}</td>
			<td>{user.patronymic}</td>
			<td>{user.birthday}</td>
			<td>{user.sex}</td>
		</tr>
	);
}
