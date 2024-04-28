import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../data/NavData";
import NavItems from "./NavItems";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col fixed left-0 w-1/2">
        <p className="text-gray-600">Dashboard</p>
        <Link to="home" className="m-5">
          Home
        </Link>
        <Link to="" className="m-5">
          Analytics
        </Link>
        <Link to="" className="m-5">
          Sales
        </Link>
        <Link to="home" className="m-5">
          Home
        </Link>
        <Link to="home" className="m-5">
          Home
        </Link>
      </div>
    </>
  );
}
