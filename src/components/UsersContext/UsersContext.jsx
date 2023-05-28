import { createContext, useState } from "react";
import { UsersService } from "./UsersService";

export const UsersContext = createContext(new UsersService());

export default function UserServiceState ({ children }) {
	const [userService] = useState(new UsersService());

	return <UsersContext.Provider value={userService}>{children}</UsersContext.Provider>;
};