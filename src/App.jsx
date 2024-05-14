import { useRoutes } from "react-router-dom";
import routers from "./routes";
import UserProvider from "./context/UserContext";

export default function App() {
  const router = useRoutes(routers);

  return <UserProvider>{router}</UserProvider>;
}
