import { useContext } from "react";
import { userLogin } from "../Utils";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

export default function PrivateRouts() {
  const { userName, userPassword } = useContext(UserContext);

  let isLogin = userLogin(userName, userPassword);
  return (
    <>
      {isLogin ? (
        <>
          <TopBar />{" "}
          <div className="flex mt-2">
            <SideBar /> <Outlet />
          </div>
        </>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
}
