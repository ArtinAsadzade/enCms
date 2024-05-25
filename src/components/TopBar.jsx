import { useContext, useState } from "react";
import {
  Bars3Icon,
  BellAlertIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Users from "../data/Users";
import { UserContext } from "../context/UserContext";
import { Messages } from "./../data/Messages";
import MessagesComp from "./MessagesComp";
import UserControl from "./UserControl";
import { ShowSideBarContext } from "./../context/ShowSideBarContext";

export default function TopBar() {
  const [showControl, setShowControl] = useState(false);
  const { userName, userPassword } = useContext(UserContext);
  const { setShowSideBar } = useContext(ShowSideBarContext);

  const showHamburgerHandler = () => {
    setShowSideBar((prevState) => (prevState = !prevState));
  };

  let userFind = Users.find(
    (user) =>
      userPassword === user.password &&
      (user.gmail === userName || user.userName === userName)
  );

  const findMessages = Messages.filter(
    (message) => message.for.toLowerCase() === userFind.userName.toLowerCase()
  );

  const userControlHandler = () => {
    setShowControl((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <div className="flex justify-between p-3 items-center shadow-sm shadow-black">
        <div>
          <h1 className="hidden sm:block font-extrabold text-xl md:text-2xl text-gray-600">
            articom.ir
          </h1>
          <Bars3Icon
            className="block sm:hidden w-6"
            onClick={showHamburgerHandler}
          />
        </div>
        <div className="flex justify-evenly items-center">
          <div className="relative group cursor-default">
            <div className="w-4 h-4 md:w-5 md:h-5 text-sm bg-red-600 rounded-full flex items-center justify-center text-white absolute -top-1">
              {findMessages.length}
            </div>
            <BellAlertIcon className="w-6 md:w-8 text-gray-600 mx-1 cursor-pointer" />
            <div
              className={`hidden w-90 group-hover:flex hover:flex w-52 flex-col justify-start transition-transform z-20 absolute bg-black top-12 right-0 rounded-lg text-white`}
            >
              {findMessages.map((item) => (
                <MessagesComp key={item.id} {...item} />
              ))}
            </div>
          </div>
          <Cog6ToothIcon className="w-6 md:w-8 text-gray-600 mx-1 cursor-pointer" />
          <img
            src={userFind.profile || "/public/Profile/Default.jpg"}
            alt="Profile Pic"
            className="bg-black rounded-full w-8 md:w-10 mx-2 cursor-pointer"
            onClick={userControlHandler}
          />
          <UserControl showControl={showControl} />
        </div>
      </div>
    </>
  );
}
