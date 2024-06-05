import { useContext } from "react";
import {
  ArrowLeftStartOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { ShowSideBarContext } from "./../context/ShowSideBarContext";
import { ShowYesOrNoContext } from "../context/ShowYesOrNoContext";
import { UserAccContext } from "../context/UserAccContext";

export default function TopBar() {
  const { setShowSideBar } = useContext(ShowSideBarContext);
  const { setShow } = useContext(ShowYesOrNoContext);
  const { userFind } = useContext(UserAccContext);

  const showHamburgerHandler = () => {
    setShowSideBar((prevState) => (prevState = !prevState));
  };

  const showLogOutMsg = () => {
    setShow((prevState) => (prevState = !prevState));
  };

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
            src={userFind.profile || "/Profile/Default.jpg"}
            alt="Profile Pic"
            className="bg-black rounded-full w-8 md:w-10 mx-2 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
