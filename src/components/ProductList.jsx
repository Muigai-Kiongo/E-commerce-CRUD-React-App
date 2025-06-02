import { Link } from "react-router-dom";

const ProductList = ({ products, addToCart }) => {
  return (
    <main>
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <img className="image" src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="price">Ksh.{product.price}/-</p>
              <p className="details">{product.shortDescription}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <span className="float-button">
        <Link to={`/add-product`}>
          <h1>+</h1>
        </Link>
      </span>
    </main>
  );
};

export default ProductList;
