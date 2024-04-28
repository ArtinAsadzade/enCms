import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routers from "./routes";
import { UserContext } from "./context/UserContext";

export default function App() {
  const router = useRoutes(routers);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <UserContext.Provider
      value={{ userName, setUserName, userPassword, setUserPassword }}
    >
      {router}
    </UserContext.Provider>
  );
}
