import { useState } from "react";

export function SearchField({ setSearchValue }) {
	const [searchVal, setSearchVal] = useState("");
	const handleSearch = e => setSearchVal(e.target.value);

	return (
		<div className="search-field">
			<input
				autoFocus
				type="text"
				onChange={handleSearch}
				value={searchVal}
			/>
			<button
				type="button"
				onClick={() => setSearchValue(searchVal)}
			>
				Поиск
			</button>
		</div>
	);
}
