import { links } from "../data/Links";
import SideBarItems from "./SideBarItems";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col w-1/3 md:w-1/6">
        <div className="sticky top-0">
          {links.map((item) => (
            <SideBarItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
