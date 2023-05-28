import { useState, useContext, useEffect } from "react";
import Row from "./Row/Row";
import { UsersContext } from "../UsersContext/UsersContext";

export default function UserTable({ searchValue }) {
	const usersService = useContext(UsersContext);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(usersService.getUsers(searchValue))
	}, [searchValue]);

	function deleteUserHandler(id) {
		usersService.deleteUser(id);
	}

	return (
		<table className="table container">
			<thead>
				<tr>
					<th>Наименование</th>
					<th>Код</th>
					<th>Фамилия</th>
					<th>Имя</th>
					<th>Отчество</th>
					<th>Дата рождения</th>
					<th>Пол</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, i) => (
					<Row
						user={user}
						deleteUserHandler={deleteUserHandler}
						key={i}
					></Row>
				))}
			</tbody>
		</table>
	);
}
