import Product from "./Product";
import "./Products.css";
import Loading from "./Loading";
import { useProductsProvider } from "../contexts/ProductsContext";

const Products = () => {
  const { error, products, isLoading } = useProductsProvider();
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <div>There is some error while fetching products</div>;
  } else {
    return (
      <>
        {products.length === 0 ? (
          <Loading />
        ) : (
          <div className="products">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </>
    );
  }
};

export default Products;
