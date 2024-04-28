import React, { useContext } from "react";
import { userLogin } from "../Utils";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TopBar from "../components/TopBar";

export default function PrivateRouts() {
  const { userName, userPassword } = useContext(UserContext);

  let isLogin = userLogin(userName, userPassword);
  return (
    <>
      {isLogin ? (
        <>
          <TopBar /> <Outlet />
        </>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
}
