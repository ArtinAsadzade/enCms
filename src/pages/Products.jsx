import { PlusIcon } from "@heroicons/react/24/outline";
import ProductsItem from "../components/ProductsItem";
import { productsData } from "../data/ProductsData";
import { useState } from "react";

export default function Products() {
  const [products] = useState(productsData);

  return (
    <div className="w-full h-svh bg-slate-200 px-5 py-10">
      <div className="w-full flex justify-between items-center bg-white m-auto p-3 rounded-lg">
        <h1 className="font-bold border-b-2">Manage Products</h1>
        <button className="px-2 py-1 bg-green-600 mx-3 rounded-sm flex items-center font-bold">
          <PlusIcon className="w-5 mx-1" /> Add
        </button>
      </div>
      <div className="w-full m-auto rounded-lg my-5">
        {products.map((item) => (
          <ProductsItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
