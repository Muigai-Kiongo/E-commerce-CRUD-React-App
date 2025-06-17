const LandingPage = () => {
  return (
    <div>
      <section
        className=" flex justify-center items-center content-center bg-cover h-screen bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/intro.jpg)" }}
      >
        <div className="flex flex-col w-1/2 h-1/2 justify-center items-center backdrop-blur-3xl text-black">
          <img
            className="w-25 h-25 drop-shadow-xl/50 mb-4"
            src="/images/images.png"
            alt=""
          />
          <h1 className="font-sans font-bold text-6xl mb-2">{"U&I Sales "}</h1>
          <p className="font-serif text-3xl">
            {"Shopping at the comfort of your Home"}
          </p>
        </div>
      </section>
      <section className="flex justify-between content-center">
        <div className=""></div>
      </section>
    </div>
  );
};

export default LandingPage;
