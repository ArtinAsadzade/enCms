import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { UsersDataContext } from "../context/UsersDataContext";
import { UserAccContext } from "../context/UserAccContext";
import YesOrNo from "./YesOrNo";

export default function UsersItem(props) {
  const [show, setShow] = useState(false);
  const { userFind } = useContext(UserAccContext);
  const { Users, setUsers } = useContext(UsersDataContext);

  console.log(userFind);

  const deleteUserHandler = () => {
    if (userFind.id === props.id) {
      setShow((prevState) => (prevState = !prevState));
    } else {
      setUsers(Users.filter((item) => item.id !== props.id));
      setShow((prevState) => (prevState = !prevState));
    }
  };

  const openYesOrNoModal = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <YesOrNo
        title={`You Want Delete *${props.userName}*?`}
        desc={`Are you sure about deleting the desired product?`}
        button={true}
        func={deleteUserHandler}
        show={show}
        setShow={setShow}
      />
      <div className="w-full grid grid-cols-12 border-b-2 bg-white px-8 py-2 my-2 rounded-md">
        <div className="text-left m-auto col-span-4 w-full">
          <p className="font-bold">
            {props.userName}{" "}
            <span className="border-b-2 text-blue-500 border-blue-500">
              {userFind.id === props.id && "Me"}
            </span>
          </p>
          <p className="font-bold text-gray-400">{props.gmail}</p>
        </div>
        <div className="text-center w-1/4 m-auto bg-blue-500 text-white text px-2 py-1 rounded-lg col-span-4">
          {props.admin ? (
            <p className="font-bold">Admin</p>
          ) : (
            <p className="font-bold">Member</p>
          )}
        </div>
        <div className="flex col-span-4 w-full justify-end justify-items-center text-gray-500">
          <button className="mx-2 my-2 rounded-sm text-lg flex items-center p-[2px] font-bold">
            <PencilSquareIcon className="w-5" />
          </button>
          <button
            className={`mx-2 my-2 rounded-sm text-lg flex items-center p-[2px] font-bold ${
              userFind.id === props.id && "opacity-20"
            }`}
            onClick={userFind.id !== props.id && openYesOrNoModal}
          >
            <TrashIcon className="w-5" />
          </button>
        </div>
      </div>
    </>
  );
}
