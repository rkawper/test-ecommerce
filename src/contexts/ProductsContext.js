import { createContext, useContext } from "react";
import { PRODCUTS_URL } from "../consts";
import useApi from "../hooks/useApi";
import { useCategoryContext } from "./CategoryContext";

const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const { selectedCategory } = useCategoryContext();
  const { error, data: products, isLoading } = useApi(
    PRODCUTS_URL + selectedCategory
  );
  return (
    <ProductsContext.Provider
      value={{
        error,
        products,
        isLoading
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsProvider = () => useContext(ProductsContext);
