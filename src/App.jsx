import { useRoutes } from "react-router-dom";
import routers from "./routes";
import UserProvider from "./context/UserContext";
import ShowSideBarProvider from "./context/ShowSideBarContext";

export default function App() {
  const router = useRoutes(routers);

  return (
    <UserProvider>
      <ShowSideBarProvider>{router}</ShowSideBarProvider>
    </UserProvider>
  );
}
