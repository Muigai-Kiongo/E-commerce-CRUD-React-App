import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">U&I Sales</h3>
            <p className="text-gray-400">
              Premium shopping experience at your fingertips. Quality products,
              fast delivery, and excellent customer service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/shopping-cart"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Business Avenue</p>
              <p className="mb-2">Nairobi, Kenya</p>
              <p className="mb-2">Phone: +254 712 345 678</p>
            </address>
          </div>
        </div>

        <p className="text-gray-400 md:mb-0 border-t border-gray-800 text-center">
          © {new Date().getFullYear()} U&I Sales. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
