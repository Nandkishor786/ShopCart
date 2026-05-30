const SplashScreen = () => {
  return (
    <div
      className="
      fixed
      inset-0
      bg-[#111827]
      flex
      flex-col
      items-center
      justify-center
      gap-6
      z-[9999]
      "
    >
      {/* APP NAME */}
      <h1
        className="
        text-5xl
        md:text-6xl
        font-bold
        text-[#d4061b]
        tracking-wider
      "
      >
        ShopCart
      </h1>

      {/* LOADER */}
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <p className="text-gray-400 text-sm md:text-base">
        Smart Shopping Experience
      </p>
    </div>
  );
};

export default SplashScreen;
