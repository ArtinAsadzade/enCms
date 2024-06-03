import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ProductDataContext } from "../context/ProductDataContext";

export default function ProductsItem(props) {
  const { products, setProducts } = useContext(ProductDataContext);
  const deleteProductHandler = () => {
    setProducts(products.filter((item) => item.id !== props.id));
  };
  return (
    <div className="w-full grid grid-cols-12 border-b-2 bg-white px-8 py-2 my-2 rounded-md">
      <img
        src={props.img}
        alt=""
        className="w-1/7 h-20 text-left col-span-3 object-cover"
      />
      <div className="m-auto col-span-3 text-center w-full">
        <p className="font-bold">{props.name}</p>
      </div>
      <div className="w-1/4 m-auto px-2 py-1 rounded-lg col-span-3">
        <p className="font-bold text-black">{props.price}</p>
        {!!props.offerPrice && (
          <p className="text-gray-400">{props.offerPrice}</p>
        )}
      </div>
      <div className="text-black flex col-span-3 w-full justify-end">
        <button className="mx-2 my-2 rounded-sm text-lg text-gray-500 flex items-center p-[2px] justify-center font-bold">
          <PencilSquareIcon className="w-5" />
        </button>
        <button className="mx-2 my-2 rounded-sm text-lg text-gray-500 flex items-center p-[2px] justify-center font-bold">
          <TrashIcon className="w-5" onClick={deleteProductHandler} />
        </button>
      </div>
    </div>
  );
}
