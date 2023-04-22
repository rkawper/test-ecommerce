import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img
        className="product-image"
        src={product.image}
        alt="Product"
        width="100px"
        height="100px"
      />
      <div className="product-title">{product.title}</div>
    </div>
  );
};

export default Product;
