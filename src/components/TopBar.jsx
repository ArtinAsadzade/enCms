import { useContext } from "react";
import {
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Users from "../data/Users";
import { UserContext } from "../context/UserContext";
import { ShowSideBarContext } from "./../context/ShowSideBarContext";
import { ShowYesOrNoContext } from "../context/ShowYesOrNoContext";

export default function TopBar() {
  const { userName, userPassword } = useContext(UserContext);
  const { setShowSideBar } = useContext(ShowSideBarContext);
  const { setShow } = useContext(ShowYesOrNoContext);

  const showHamburgerHandler = () => {
    setShowSideBar((prevState) => (prevState = !prevState));
  };

  const showLogOutMsg = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  let userFind = Users.find(
    (user) =>
      userPassword === user.password &&
      (user.gmail === userName || user.userName === userName)
  );

  return (
    <>
      <div className="flex justify-between p-3 items-center shadow-sm shadow-black">
        <div>
          <h1 className="hidden sm:block font-extrabold text-xl md:text-2xl text-gray-600">
            articom.ir
          </h1>
          <Bars3Icon
            className="block sm:hidden w-6 cursor-pointer"
            onClick={showHamburgerHandler}
          />
        </div>
        <div className="flex justify-evenly items-center">
          <ArrowLeftStartOnRectangleIcon
            onClick={showLogOutMsg}
            className="w-5 md:w-8 text-black cursor-pointer mx-2"
          />
          <img
            src={userFind.profile || "/public/Profile/Default.jpg"}
            alt="Profile Pic"
            className="bg-black rounded-full w-8 md:w-10 mx-2 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
