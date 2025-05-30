import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to={`/`}>
        <h1>U&I Sales</h1>
      </Link>
      <Link to={`/shopping-cart`}>
        <h1>Cart</h1>
      </Link>
    </div>
  );
}

export default Header;
