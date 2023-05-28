import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserServiceState from "./components/UsersContext/UsersContext";
import UserTable from "./components/Table/Table";

export default function App() {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className="app">
			<UserServiceState>
				<Header setSearchValue={setSearchValue} />
				<UserTable searchValue={searchValue} />
			</UserServiceState>
		</div>
	);
}
