import { useParams } from "react-router-dom";
import products from "./products";
import ProductList from "./ProductList";
import { useCart } from "../hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const HandleAddToCart = () => {
    addToCart(product);
    alert("${product.name}has been added to Cart");
  };

  return (
    <>
      <div className="product">
        <h1>{product.name}</h1>
        <img className="image" src={product.image} alt={product.name} />
        <p className="price">{product.price}</p>
        <p className="details">{product.shortDescription}</p>
        <p className="details">{product.longDescription}</p>
        <button onClick={HandleAddToCart}>Add to Cart</button>
      </div>
      <h3>You may also Like</h3>
      <ProductList />
    </>
  );
};

export default ProductDetail;
