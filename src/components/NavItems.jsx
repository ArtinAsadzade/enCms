import React from "react";
import { Link } from "react-router-dom";

export default function NavItems(props) {
  return (
    <>
      <Link to={props.link} className="m-5">
        {props.title}
      </Link>
    </>
  );
}
