import { FaTruck, FaCreditCard, FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="
      w-full
      bg-black
      py-16
      sm:py-20
      md:py-24
      px-4
      sm:px-6
      md:px-12
      text-white
    "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            mb-6
          "
          >
            Why Choose
            <span className="text-red-500"> ShopCart?</span>
          </h2>

          <p
            className="
            text-gray-400
            text-base
            sm:text-lg
            max-w-2xl
            mx-auto
          "
          >
            Experience next-level shopping with secure payments, premium
            quality, and lightning-fast delivery.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
          lg:gap-10
        "
        >
          {/* Card 1 */}
          <div
            className="
            bg-zinc-900
            border
            border-zinc-800
            p-6
            md:p-8
            rounded-3xl
            hover:border-red-500
            hover:-translate-y-2
            transition-all
            duration-300
          "
          >
            <div
              className="
              w-14
              h-14
              md:w-16
              md:h-16
              bg-red-500/10
              flex
              items-center
              justify-center
              rounded-2xl
              mb-6
            "
            >
              <FaTruck className="text-3xl text-red-500" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Fast Delivery
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Get your products delivered quickly with our trusted shipping
              partners worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
            bg-zinc-900
            border
            border-zinc-800
            p-6
            md:p-8
            rounded-3xl
            hover:border-red-500
            hover:-translate-y-2
            transition-all
            duration-300
          "
          >
            <div
              className="
              w-14
              h-14
              md:w-16
              md:h-16
              bg-red-500/10
              flex
              items-center
              justify-center
              rounded-2xl
              mb-6
            "
            >
              <FaCreditCard className="text-3xl text-red-500" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Secure Payment
            </h3>

            <p className="text-gray-400 leading-relaxed">
              100% secure and encrypted payment methods for safe online
              shopping.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
            bg-zinc-900
            border
            border-zinc-800
            p-6
            md:p-8
            rounded-3xl
            hover:border-red-500
            hover:-translate-y-2
            transition-all
            duration-300
          "
          >
            <div
              className="
              w-14
              h-14
              md:w-16
              md:h-16
              bg-red-500/10
              flex
              items-center
              justify-center
              rounded-2xl
              mb-6
            "
            >
              <FaStar className="text-3xl text-red-500" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Premium Quality
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We provide high-quality products with premium customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
