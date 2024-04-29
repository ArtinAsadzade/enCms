import { useContext } from "react";
import { BellAlertIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Users from "../data/Users";
import { UserContext } from "../context/UserContext";
import { Messages } from "./../data/Messages";
import MessagesComp from "./MessagesComp";

export default function TopBar() {
  const { userName, userPassword } = useContext(UserContext);
  let userFind = Users.find(
    (user) =>
      userPassword === user.password &&
      (user.gmail === userName || user.userName === userName)
  );
  const findMessages = Messages.filter(
    (message) => message.for.toLowerCase() === userFind.userName.toLowerCase()
  );

  return (
    <>
      <div className="flex justify-between p-3 items-center shadow-sm shadow-black">
        <div>
          <h1 className="font-bold text-xl md:text-2xl text-gray-600">
            articom.ir
          </h1>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="relative group cursor-default">
            <div className="w-4 h-4 md:w-5 md:h-5 text-sm bg-red-600 rounded-full flex items-center justify-center text-white absolute -top-1">
              {findMessages.length}
            </div>
            <BellAlertIcon className="w-6 md:w-8 text-gray-600 mx-1 cursor-pointer" />
            <div className="hidden w-96 group-hover:block hover:block transition-all absolute bg-white shadow-xl p-2 top-8 -left-64 rounded-lg">
              {findMessages.map((item) => (
                <MessagesComp key={item.id} {...item} />
              ))}
            </div>
          </div>
          <Cog6ToothIcon className="w-6 md:w-8 text-gray-600 mx-1 cursor-pointer" />

          <img
            src={userFind.profile}
            alt="Profile Pic"
            className="bg-black rounded-full w-8 md:w-10 mx-2"
          />
        </div>
      </div>
    </>
  );
}
