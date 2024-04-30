import { links } from "../data/Links";
import SideBarItems from "./SideBarItems";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col w-1/3 md:w-1/6">
        <div className="sticky top-0">
          <div className="w-full flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Dashboard</p>
            {links
              .filter((item) => item.category === "dashboard")
              .map((item) => (
                <SideBarItems ket={item.id} {...item} />
              ))}
          </div>
          <div className="w-full flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Quick Menu</p>
            {links
              .filter((item) => item.category === "quickmenu")
              .map((item) => (
                <SideBarItems ket={item.id} {...item} />
              ))}
          </div>
          <div className="w-full flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Notification</p>
            {links
              .filter((item) => item.category === "notification")
              .map((item) => (
                <SideBarItems ket={item.id} {...item} />
              ))}
          </div>
          <div className="w-full flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Staff</p>
            {links
              .filter((item) => item.category === "staff")
              .map((item) => (
                <SideBarItems ket={item.id} {...item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
