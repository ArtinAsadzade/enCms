import { PencilSquareIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function ProductsItem(props) {
  return (
    <div className="w-full grid grid-cols-4 items-center  my-5 rounded-lg shadow-lg bg-white p-2">
      <img src={props.img} alt="" className="w-1/7 h-20 object-cover m-auto" />
      <div className="text-center m-auto">
        <p className="font-bold">{props.name}</p>
      </div>
      <div className="text-center m-auto">
        <p className="font-bold">{props.price}</p>
        {!!props.offerPrice && (
          <p className="text-red-500">{props.offerPrice}</p>
        )}
      </div>
      <div className="text-black m-auto">
        <button className="bg-yellow-400 mx-3 my-2 rounded-sm flex items-center p-[2px] justify-center font-bold">
          <PencilSquareIcon className="w-5 mx-1" />
        </button>
        <button className="bg-red-600 mx-3 my-2 rounded-sm flex items-center p-[2px] justify-center font-bold">
          <MinusIcon className="w-5 mx-1" />
        </button>
      </div>
    </div>
  );
}
