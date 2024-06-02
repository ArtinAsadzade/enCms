import { useRoutes } from "react-router-dom";
import routers from "./routes";
import UserProvider from "./context/UserContext";
import ShowSideBarProvider from "./context/ShowSideBarContext";
import ShowYesOrNoProvider from "./context/ShowYesOrNoContext";
import UsersDataProvider from "./context/UsersDataContext";

export default function App() {
  const router = useRoutes(routers);

  return (
    <UserProvider>
      <ShowYesOrNoProvider>
        <UsersDataProvider>
          <ShowSideBarProvider>{router}</ShowSideBarProvider>
        </UsersDataProvider>
      </ShowYesOrNoProvider>
    </UserProvider>
  );
}
