import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function UsersItem(props) {
  return (
    <div className="w-full grid grid-cols-12 border-b-2 bg-white px-8 py-2 my-2 rounded-md">
      <div className="text-left m-auto col-span-4 w-full">
        <p className="font-bold">{props.userName}</p>
        <p className="font-bold text-gray-400">{props.gmail}</p>
      </div>
      <div className="text-center w-1/4 m-auto bg-blue-500 text-white text px-2 py-1 rounded-lg col-span-4">
        {props.admin ? (
          <p className="font-bold">admin</p>
        ) : (
          <p className="font-bold">Member</p>
        )}
      </div>
      <div className="flex col-span-4 w-full justify-end justify-items-center text-gray-500">
        <button className="mx-2 my-2 rounded-sm text-lg flex items-center p-[2px] font-bold">
          <PencilSquareIcon className="w-5" />
        </button>
        <button className="mx-2 my-2 rounded-sm text-lg flex items-center p-[2px] font-bold">
          <TrashIcon className="w-5" />
        </button>
      </div>
    </div>
  );
}