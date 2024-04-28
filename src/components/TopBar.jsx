import React, { useContext } from "react";
import { BellAlertIcon, GlobeAltIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Users from "../data/Users";
import { UserContext } from "../context/UserContext";

export default function TopBar() {
  const { userName, userPassword } = useContext(UserContext);
  let userFind = Users.find((user) => userPassword === user.password && (user.gmail === userName || user.userName === userName));

  return (
    <>
      <div className="flex justify-between p-3 items-center">
        <div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-600">articom.ir</h1>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="relative">
            <div className="w-4 h-4 md:w-5 md:h-5 text-sm bg-red-600 rounded-full flex items-center justify-center text-white absolute -top-1">
              3
            </div>
            <BellAlertIcon className="w-6 md:w-8 text-gray-600 mx-1" />
          </div>
          <div className="relative">
            <div className="w-4 h-4 md:w-5 md:h-5 text-sm bg-red-600 rounded-full flex items-center justify-center text-white absolute -top-1">
              3
            </div>
            <GlobeAltIcon className="w-6 md:w-8 text-gray-600 mx-1" />
          </div>
          <Cog6ToothIcon className="w-6 md:w-8 text-gray-600 mx-1" />

          <img src={userFind.profile} alt="Profile Pic" className="bg-black rounded-full w-8 md:w-10 mx-2" />
        </div>
      </div>
    </>
  );
}
