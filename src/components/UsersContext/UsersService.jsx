import User from "../../models/User";

export class UsersService {
	_users = [];
	_newUser = {};

	constructor() {
		this.loadUsers();
	}

	createUser(fullName, surname, name, patronymic, birthday, sex) {
		this._newUser = new User(null, fullName, surname, name, patronymic, birthday, sex);
		console.log("CREATE");
		console.log(this._newUser);
	}

	deleteUser(id) {
		console.log("DELETE");
		console.log(this._users.find(user => user.id === id));
	}

	loadUsers() {
		this._users = [
			{
				fullName: "Иванов Пётр Сергеевич",
				id: "001",
				surname: "Иванов",
				name: "Пётр",
				patronymic: "Сергеевич",
				birthday: "01.05.1995",
				sex: "Мужской"
			},
			{
				fullName: "Кискин Василий Арестотель",
				id: "002",
				surname: "Кискин",
				name: "Василий",
				patronymic: "Арестотель",
				birthday: "22.04.1941",
				sex: "Мужской"
			},
		];
	}

	getUsers(searchVal) {
		const users = this._users.filter(user => user.fullName.toLowerCase().includes(searchVal.toLowerCase()));
		return users ?? [];
	}
}
