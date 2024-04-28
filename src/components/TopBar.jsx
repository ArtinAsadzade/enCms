import React, { useState } from "react";
import { BellAlertIcon, GlobeAltIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Users from "../data/Users";

export default function TopBar() {
  const [users, setUsers] = useState(Users);
  return (
    <>
      <div>
        <div>
          <h1>Articom.ir</h1>
        </div>
        <div>
          <BellAlertIcon />
          <GlobeAltIcon />
          <Cog6ToothIcon />
          <img src="" alt="Profile Pic" />
        </div>
      </div>
    </>
  );
}
