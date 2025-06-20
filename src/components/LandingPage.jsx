import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <section
        className=" h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/intro.jpg)" }}
      >
        <div className="flex flex-col w-full h-1/2 md:w-1/2 justify-center items-center backdrop-blur-3xl  ">
          <img
            className="w-25 h-25 mb-4"
            src="/images/images.png"
            alt="U&I Sales Logo"
          />
          <h1 className="font-sans font-bold text-4xl md:text-6xl mb-2">
            {"U&I Sales "}
          </h1>
          <p className="font-serif text-3xl">
            {"Premium shopping experience at your fingertips."}
          </p>
          <Link
            to="/products"
            className="bg-green-500 hover:bg-green-700 text-white font-serif font-bold py-2 px-4 rounded"
          >
            Explore Products
          </Link>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose U&I Sales?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-scale text-center">
              <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                We guarantee delivery within 24-48 hours in major cities and 3-5
                business days nationwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-scale text-center">
              <h3 className="text-xl font-bold mb-4">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your order in real-time from our warehouse to your
                doorstep with our advanced system.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-scale text-center">
              <h3 className="text-xl font-bold mb-4">Secure Payments</h3>
              <p className="text-gray-600">
                Your transactions are 100% secure with our bank-level encryption
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">Customer First</h3>
              </div>
              <p className="text-gray-600">
                We put our customers at the heart of everything we do, ensuring
                their needs are always met with excellence.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">Quality Assurance</h3>
              </div>
              <p className="text-gray-600">
                Every product undergoes rigorous quality checks to ensure you
                receive only the best items available.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">Innovation</h3>
              </div>
              <p className="text-gray-600">
                We continuously improve our services through technology and
                creative solutions to enhance your shopping experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-scale">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">Integrity</h3>
              </div>
              <p className="text-gray-600">
                We conduct our business with honesty and transparency, building
                trust with every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 italic">
                "I ordered a smartphone and it arrived the next day! The
                packaging was excellent and the product was exactly as
                described. U&I Sales is now my go-to online store."
              </p>
              <h4 className="font-bold mt-4">Sarah Johnson</h4>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 italic">
                "The customer service is outstanding. When I had an issue with
                my order, they resolved it immediately. The real-time tracking
                feature is incredibly useful too."
              </p>
              <h4 className="font-bold mt-4">Michael Chen</h4>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 italic">
                "I've shopped with many online stores, but U&I Sales stands out
                for their product quality and fast delivery. My wireless
                headphones are amazing and were a great price!"
              </p>
              <h4 className="font-bold mt-4">Emma Rodriguez</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated With Our Latest Offers
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get 10% off your first order plus
            exclusive access to new products and special promotions.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-full focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-900 px-6 py-3 rounded-r-full font-bold transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="flex justify-center items-center gap-10">
            <img
              src="/images/contact-us.png"
              alt="Contact Us"
              className="h-50 w-50"
            />
            <div className="text-center md:text-left">
              <a
                href="tel:+254712345678"
                className="font-sans text-2xl md:text-4xl font-bold text-gray-800 hover:text-green-600 transition duration-300"
              >
                +254712345678
              </a>
              <p className="mt-6 text-lg text-gray-600 max-w-md">
                Available 24/7 for your inquiries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
