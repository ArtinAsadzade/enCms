import { createContext, useState } from "react";
import { productsData } from "../data/ProductsData";

export const ProductDataContext = createContext();

export default function ProductDataProvider({ children }) {
  const [products, setProducts] = useState(productsData);

  return (
    <ProductDataContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductDataContext.Provider>
  );
}
