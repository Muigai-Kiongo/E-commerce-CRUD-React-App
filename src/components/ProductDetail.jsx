import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { useCart } from "../hooks/useCart";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="product">
        <h1>{product.name}</h1>
        <img className="image" src={product.image} alt={product.name} />
        <p className="price">Ksh.{product.price}/-</p>
        <p className="details">{product.shortDescription}</p>
        <p className="details">{product.longDescription}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <h3>You may also like</h3>
      <ProductList products={products} addToCart={addToCart} />
    </>
  );
};

export default ProductDetail;
