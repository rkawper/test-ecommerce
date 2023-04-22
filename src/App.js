import Header from "./components/Header";
import Products from "./components/Products";
import CategoryProvider from "./contexts/CategoryContext";
import ProductsProvider from "./contexts/ProductsContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <Header />
        <ProductsProvider>
          <Products />
        </ProductsProvider>
      </CategoryProvider>
    </div>
  );
}
