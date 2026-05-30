import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../features/cart/cartSlice";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { successToast, errorToast } from "../utils/toast";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const isInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div
      className="
      group
      bg-linear-to-b
      from-zinc-900
      to-black
      border
      border-zinc-800
      rounded-3xl
      overflow-hidden
      hover:border-red-500
      hover:shadow-2xl
      hover:shadow-red-500/10
      transition-all
      duration-500
      hover:-translate-y-3
    "
    >
      {/* Top Section */}
      <div
        className="
  relative
  bg-white
  h-72
  flex
  items-center
  justify-center
  overflow-hidden
  "
      >
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="
    h-56
    object-contain
    group-hover:scale-110
    transition-all
    duration-500
    "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2
          className="
          text-lg
          font-bold
          text-white
          leading-snug
          line-clamp-2
          min-h-15
        "
        >
          {product.title}
        </h2>

        {/* Rating */}
        <div
          className="
          flex
          items-center
          justify-between
          mt-1
        "
        >
          <div
            className="
            flex
            items-center
            gap-2
          "
          >
            <FaStar
              className="
              text-yellow-400
            "
            />

            <span
              className="
              text-gray-200
              font-medium
            "
            >
              {product.rating.rate}
            </span>

            <span
              className="
              text-gray-500
              text-sm
            "
            >
              ({product.rating.count})
            </span>
          </div>

          {/* Price */}
          <h3
            className="
            text-3xl
            font-extrabold
            text-red-500
          "
          >
            ₹ {product.price}
          </h3>
        </div>

        {/* Button */}
        {isInCart ? (
          <button
            onClick={() => {
              dispatch(removeItem(product.id));
              errorToast("Remove From Cart");
            }}
            className="
  mt-5
  w-full
  bg-zinc-800
  hover:bg-red-600
  border
  border-red-500
  text-red-500
  hover:text-white
  py-3
  rounded-xl
  flex
  items-center
  justify-center
  gap-2
  text-sm
  font-semibold
  transition-all
  duration-300
  hover:scale-105
  active:scale-95
"
          >
            <FaShoppingCart size={14} />
            Remove
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(addToCart(product));
              successToast("Added To Cart");
            }}
            className="
  mt-5
  w-full
  bg-red-500
  hover:bg-red-600
  text-white
  py-3
  rounded-xl
  flex
  items-center
  justify-center
  gap-2
  text-sm
  font-semibold
  transition-all
  duration-300
  hover:scale-105
  active:scale-95
"
          >
            <FaShoppingCart size={14} />
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
