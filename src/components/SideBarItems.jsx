import React from "react";
import { Link } from "react-router-dom";

export default function SideBarItems(props) {
  return (
    <Link to={props.link} className="w-full hover:bg-slate-200 p-1 rounded-md flex">
      {props.name}
    </Link>
  );
}
