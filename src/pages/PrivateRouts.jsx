import React from "react";
import { userLogin } from "../Utils";
import { userNameLogin, passwordLogin } from "./../data/UserLogin";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouts() {
  let isLogin = userLogin(userNameLogin, passwordLogin);
  return <>{isLogin ? <Outlet /> : <Navigate to={"/"} />}</>;
}
