import { PlusIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import UsersItem from "../components/UsersItem";
import { useContext } from "react";
import { UsersDataContext } from "../context/UsersDataContext";

export default function Users() {
  const { Users } = useContext(UsersDataContext);
  return (
    <div className="w-full h-full bg-slate-200 px-5 py-10">
      <div className="w-full flex justify-between items-center bg-white m-auto p-3 rounded-lg">
        <h1 className="font-bold border-b-2">Manage Members</h1>
        <Link
          to={"/users/newUser"}
          className="p-2 bg-blue-500 mx-3 rounded-lg flex text-white items-center justify-center"
        >
          Add User
          <PlusIcon className="font-bold w-5 mx-1" />
        </Link>
      </div>
      <div className="w-full m-auto my-10 rounded-lg">
        <div className="w-full shadow-md rounded-lg grid grid-cols-12 text-[#7d889e] font-bold bg-gray-200 border-b-2 px-10 py-2">
          <div className="text-left m-auto col-span-4 w-full">Name / Email</div>
          <div className="text-center w-1/4 m-auto px-2 py-1 rounded-lg col-span-4">
            Role
          </div>
          <div className="flex col-span-4 w-full justify-end">Action</div>
        </div>

        <div>
          {Users.map((item) => (
            <UsersItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
