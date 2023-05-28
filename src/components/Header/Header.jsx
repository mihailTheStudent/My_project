import React from "react";
import { CreateUserPopup } from "../CreateUserPopup/CreateUserPopup";
import { SearchField } from "../SearchField/SearchField";

export default function Header ({ setSearchValue }) {
	const [open, setOpen] = React.useState(false);

	return (
		<header>
			<h1 className="header">Cписок сотрудников</h1>
			<button
				className="open-popup-btn"
				onClick={() => setOpen(true)}
			>
				+
			</button>
			<CreateUserPopup
				open={open}
				setOpen={setOpen}
			/>
			<SearchField setSearchValue={setSearchValue} />
		</header>
	);
};
