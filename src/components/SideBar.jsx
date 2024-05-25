import { XMarkIcon } from "@heroicons/react/24/outline";
import { links } from "../data/Links";
import SideBarItems from "./SideBarItems";
import { ShowSideBarContext } from "../context/ShowSideBarContext";
import { useContext } from "react";

export default function SideBar() {
  const { showSideBar, setShowSideBar } = useContext(ShowSideBarContext);

  const showHamburgerHandler = () => {
    setShowSideBar((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <div
        className={`${
          showSideBar ? "block" : ""
        }hidden fixed top-0 sm:sticky bg-white h-svh sm:flex flex-col w-1/3 md:w-1/6`}
      >
        <XMarkIcon
          className="block sm:hidden w-6 my-3 mx-2"
          onClick={showHamburgerHandler}
        />
        <div className="sticky top-0">
          {links.map((item) => (
            <SideBarItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
