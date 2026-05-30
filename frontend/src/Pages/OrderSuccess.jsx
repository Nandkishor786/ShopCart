import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
      min-h-screen
      bg-zinc-100
      flex
      items-center
      justify-center
      px-4
      sm:px-6
    "
    >
      <div
        className="
        bg-white
        p-6
        sm:p-8
        md:p-10
        rounded-2xl
        shadow-sm
        text-center
        max-w-xl
        w-full
      "
      >
        {/* Success Icon */}
        <FaCheckCircle
          className="
          text-green-500
          text-5xl
          sm:text-6xl
          md:text-7xl
          mx-auto
          mb-6
        "
        />

        {/* Heading */}
        <h1
          className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          text-black
        "
        >
          Order Placed!
        </h1>

        {/* Message */}
        <p
          className="
          text-gray-500
          text-sm
          sm:text-base
          md:text-lg
          mt-4
          leading-relaxed
        "
        >
          Your order has been successfully placed. Thank you for shopping with
          us.
        </p>

        {/* Button */}
        <button
          onClick={() => {
            navigate("/products");

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="
          mt-8
          w-full
          sm:w-auto
          bg-[#FB641B]
          hover:bg-[#E85A16]
          text-white
          px-6
          sm:px-8
          py-3
          md:py-4
          rounded-xl
          text-base
          md:text-lg
          font-semibold
          transition-all
          duration-300
        "
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
