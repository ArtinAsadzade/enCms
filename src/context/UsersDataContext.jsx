import { createContext, useState } from "react";
import UsersData from "../data/UsersData";

export const UsersDataContext = createContext();

export default function UsersDataProvider({ children }) {
  const [Users, setUsers] = useState(UsersData);

  return (
    <UsersDataContext.Provider value={{ Users, setUsers }}>
      {children}
    </UsersDataContext.Provider>
  );
}
