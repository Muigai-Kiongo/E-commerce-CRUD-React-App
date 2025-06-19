import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-around bg-gray-900 text-white text-3xl py-5">
      <Link to={`/`}>
        <h1 className="font-sans font-bold  hover:text-blue-500 ">U&I Sales</h1>
      </Link>
      <Link to={`/products`}>
        <h1 className="font-serif hover:text-blue-500 ">Products</h1>
      </Link>
      <Link to={`/shopping-cart`}>
        <h1 className="font-serif hover:text-blue-500">Cart</h1>
      </Link>
    </div>
  );
}

export default Header;
