import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../features/cart/cartSlice";
import { useState } from "react";
import { errorToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";
import { cartCalculations } from "../utils/cartCalculations";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  const { subtotal, discount, tax, shipping, total } =
    cartCalculations(cartItems);

  const applyCoupon = () => {
    if (coupon === "NAND10") {
      setCouponDiscount(subtotal * 0.1);
    } else if (coupon === "NAND20") {
      setCouponDiscount(subtotal * 0.2);
    } else {
      setCouponDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const finalTotal = total - couponDiscount;

  if (cartItems.length === 0) {
    return (
      <div
        className="
      min-h-screen
      bg-black
      flex
      flex-col
      items-center
      justify-center
      text-white
      px-6
    "
      >
        <FaShoppingCart
          className="
        text-8xl
        text-red-500
        mb-8
      "
        />

        <h1
          className="
      text-3xl sm:text-4xl md:text-5xl
        font-extrabold
        mb-4
      "
        >
          Your Cart is Empty
        </h1>

        <p
          className="
        text-gray-400
        text-lg
        text-center
        max-w-md
      "
        >
          Looks like you have not added any products yet.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
     px-4
sm:px-6
md:px-12
      py-12
    "
    >
      {/* Heading */}
      <div
        className="
        flex
        items-center
        gap-4
        mb-12
      "
      >
        <FaShoppingCart
          className="
          text-red-500
          text-5xl
        "
        />

        <h1
          className="
       text-3xl sm:text-4xl md:text-5xl
          font-extrabold
        "
        >
          My
          <span className="text-red-500"> Cart</span>
        </h1>
      </div>

      {/* Main Layout */}
      <div
        className="
       grid
grid-cols-1
lg:grid-cols-3
gap-6
lg:gap-10 
      "
      >
        {/* Cart Products */}
        <div
          className="
          lg:col-span-2
          space-y-6
        "
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
p-4 md:p-6  flex
            flex-col
            md:flex-row
            gap-6
            items-center
          "
            >
              {/* Image */}
              <div
                className="
              bg-white
              rounded-2xl
              p-4
             w-32
h-32
sm:w-40
sm:h-40
md:w-48
md:h-48
              flex
              items-center
              justify-center
            "
              >
                <img
                  src={item.image}
                  alt="product"
                  className="
h-24
sm:h-32
md:h-36
object-contain
"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h2
                  className="
              text-lg md:text-2xl
                font-bold
                mb-3
              "
                >
                  {item.title}
                </h2>

                <p
                  className="
              text-gray-400 mb-5 text-sm md:text-base
              "
                >
                  {item.description.slice(0, 80)}
                </p>

                {/* Quantity */}
                <div
                  className="
                flex
                items-center
                gap-4
              "
                >
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="
                  bg-zinc-800
                  hover:bg-red-500
                  w-10
                  h-10
                  rounded-full
                  text-xl
                  transition-all
                "
                  >
                    -
                  </button>

                  <span
                    className="
                  text-xl
                  font-bold
                "
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="
                  bg-zinc-800
                  hover:bg-red-500
                  w-10
                  h-10
                  rounded-full
                  text-xl
                  transition-all
                "
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price + Delete */}
              <div
                className="
              flex
              flex-col
              items-center
              gap-6
            "
              >
                <h3
                  className="
text-2xl md:text-3xl  font-bold
                text-red-500
              "
                >
                  ₹{(item.price * item.quantity).toFixed(2)}
                </h3>

                <button
                  onClick={() => {
                    dispatch(removeItem(item.id));
                    errorToast("Remove From Cart");
                  }}
                  className="
                bg-red-500
                hover:bg-red-600
                p-4
                rounded-full
                transition-all
              "
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div
          className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
p-5 md:p-8          h-fit
          sticky
          top-28
        "
        >
          <h2
            className="
text-2xl md:text-3xl  font-bold
            mb-8
          "
          >
            Order Summary
          </h2>

          {/* Summary Items */}
          <div className="space-y-5">
            <div
              className="
              flex
              justify-between
              text-gray-400
            "
            >
              <span>Subtotal</span>

              <span>₹ {subtotal.toFixed(2)}</span>
            </div>

            <div
              className="
              flex
              justify-between
              text-gray-400
            "
            >
              <span>Shipping</span>

              <span>₹ {shipping.toFixed(2)}</span>
            </div>

            <div
              className="
              flex
              justify-between
              text-gray-400
            "
            >
              <span>Tax</span>

              <span>₹ {tax.toFixed(2)}</span>
            </div>

            <div
              className="
  flex
  justify-between
  text-green-400
"
            >
              <span>Discount</span>
              <span>- ₹ {discount.toFixed(2)}</span>
            </div>
            <div
              className="
              border-t
              border-zinc-800
              pt-5
              flex
              justify-between
              text-xl md:text-2xl 
              font-bold
            "
            >
              <span>Total</span>

              <span className="text-red-500">₹ {finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="mt-8">
            <h3
              className="
    text-lg
    font-semibold
    mb-4
  "
            >
              Apply Coupon
            </h3>
            <div
              className="
   flex
flex-col
sm:flex-row
gap-3
  "
            >
              <input
                type="text"
                placeholder="Enter coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="
      flex-1
      bg-black
      border
      border-zinc-700
      rounded-xl
      px-4
      py-3
      outline-none
      focus:border-red-500
    "
              />
              <button
                onClick={applyCoupon}
                className="
bg-red-500
hover:bg-red-600
px-5
py-3
rounded-xl
font-semibold
transition-all
"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => {
              navigate("/checkout");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="
            mt-10
            w-full
            bg-red-500
            hover:bg-red-600
             rounded-2xl
            py-3 md:py-4
text-base md:text-lg
            font-bold
            transition-all
            duration-300
            hover:scale-105
          "
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
