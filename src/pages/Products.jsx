import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Products() {
  return (
    <div className="w-full h-svh bg-slate-200 px-5 py-10">
      <div className="w-full flex justify-evenly bg-white m-auto p-3 rounded-lg">
        <button className="w-1/4 md:w-1/6 bg-green-600 mx-3 rounded-sm flex items-center justify-center font-bold">
          <PlusIcon className="w-5 mx-1" /> Add
        </button>
        <button className="w-1/4 md:w-1/6 bg-yellow-500 mx-3 rounded-sm flex items-center justify-center font-bold">
          <PencilSquareIcon className="w-5 mx-1" /> Edit
        </button>
      </div>
    </div>
  );
}
