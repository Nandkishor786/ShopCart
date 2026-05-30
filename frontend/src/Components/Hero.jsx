import { useNavigate } from "react-router-dom";

const Hero = () => {

const navigate = useNavigate();
  return (
    <section
      className="
      w-full
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-4
      sm:px-6
      md:px-10
      py-10
    "
    >
      <div
        className="
        max-w-7xl
        w-full
        grid
        grid-cols-1
        md:grid-cols-2
        gap-10
        lg:gap-16
        items-center
      "
      >
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
          "
          >
            Discover The Best
            <span className="text-red-500"> Shopping </span>
            Experience
          </h1>

          <p
            className="
            text-gray-400
            text-base
            sm:text-lg
            leading-relaxed
            max-w-xl
            mx-auto
            md:mx-0
          "
          >
            Explore premium products with amazing deals and seamless shopping
            experience using React and Redux Toolkit.
          </p>

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            md:justify-start
          "
          >
            <button
              onClick={() => {
                navigate("/products");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="
              bg-red-500
              hover:bg-red-600
              px-8
              py-3
              rounded-lg
              text-base
              sm:text-lg
              font-semibold
              transition
              duration-300
              cursor-pointer
            "
            >
              Shop Now
            </button>

            <button
              onClick={() => {
                navigate("/products");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="
              border
              border-white
              hover:bg-white
              hover:text-black
              px-8
              py-3
              rounded-lg
              text-base
              sm:text-lg
              font-semibold
              transition
              duration-300
              cursor-pointer
            "
            >
              Explore
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="shopping"
            className="
            w-full
            max-w-xs
            sm:max-w-sm
            md:max-w-md
            lg:max-w-lg
            rounded-3xl
            shadow-2xl
            object-cover
          "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
