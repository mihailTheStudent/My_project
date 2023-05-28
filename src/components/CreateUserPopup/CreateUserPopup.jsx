import { useContext } from "react";
import Popup from "../shared/Popup/Popup";
import { UsersContext } from "../UsersContext/UsersContext";

export function CreateUserPopup({ open, setOpen }) {
	const usersService = useContext(UsersContext);
	function serializeForm(formNode) {
		return new FormData(formNode);
	}

	function onFormSubmit(event) {
		event.preventDefault();
		const data = serializeForm(event.target);
		console.log(data);
		usersService.createUser();
	}

	return (
		<Popup
			open={open}
			setOpen={setOpen}
		>
			<form onSubmit={onFormSubmit}>
				<div>
					<h2>Сотрудники (Создание)</h2>
					<button
						className="bm-1"
						type="submit"
						onClick={() => setOpen(false)}
					>
						Записать и закрыть
					</button>
					<button
						className="bm-2"
						type="submit"
					>
						Записать
					</button>
				</div>

				<label>
					Код:
					<input
						type="number"
						name="id"
						disabled
					/>
				</label>

				<label>
					Наименование:
					<input
						type="text"
						name="fullName"
						required
					/>
				</label>

				<label>
					Фамилия:
					<input
						type="text"
						name="surname"
						required
					/>
				</label>

				<label>
					Имя:
					<input
						type="text"
						name="name"
						required
					/>
				</label>

				<label>
					Отчество:
					<input
						type="text"
						name="patronymic"
						required
					/>
				</label>

				<label>
					Дата рождения:
					<input
						type="text"
						name="birthday"
						required
					/>
				</label>

				<label>
					Пол:
					<select
						name="sex"
						required
					>
						<option
							value="male"
							selected
						>
							Мужской
						</option>
						<option value="female">Женский</option>
					</select>
				</label>
			</form>
		</Popup>
	);
}
