import { useEffect } from "react";
import { fetchAllProducts } from "../services/products/product.service";
import createDataStore from "../shared/data-store";
import type { ProductsProps } from "../types/index.type";
import { ProductsCard } from "../components/index.components";

function home() {
  const { setStore, records } = createDataStore<ProductsProps>();

  const getProducts = async () => {
    try {
      const apiResponse = await fetchAllProducts();
      setStore({
        records: apiResponse.results as ProductsProps[],
        limit: apiResponse.limit,
        skip: apiResponse.limit,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="text-center max-h-dvh max-w-svw   overflow-auto content-center text-4xl font-semibold">
        {document.location.pathname.toUpperCase()}
        {records.length > 0 && (
          <div className="flex flex-wrap">
            {records.map((val: ProductsProps) => {
              return <ProductsCard product={val} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default home;
