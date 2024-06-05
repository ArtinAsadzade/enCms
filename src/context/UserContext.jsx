import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "Test User"
  );
  const [userPassword, setUserPassword] = useState(
    localStorage.getItem("password") || "123"
  );

  return (
    <UserContext.Provider
      value={{ userName, setUserName, userPassword, setUserPassword }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
