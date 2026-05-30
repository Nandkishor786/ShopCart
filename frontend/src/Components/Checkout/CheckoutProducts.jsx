import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../features/cart/cartSlice";

const CheckoutProducts = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div
      className="
      bg-white
      shadow-sm
      border-b
      border-[#E3E3E3]
    "
    >
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="
          p-4
          md:p-6
          flex
          flex-col
          sm:flex-row
          gap-5
          md:gap-6
          border-b
          border-[#E3E3E3]
          hover:bg-[#FAFAFA]
          transition-all
          duration-300
        "
        >
          {/* LEFT */}
          <div
            className="
            flex
            flex-col
            items-center
            gap-4
            sm:min-w-[140px]
          "
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt="product"
              className="
              w-24
              h-24
              sm:w-28
              sm:h-28
              md:w-36
              md:h-36
              object-contain
            "
            />

            {/* QUANTITY */}
            <div
              className="
              flex
              items-center
              gap-2
              sm:gap-3
            "
            >
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                rounded-full
                border
                border-gray-300
                text-base
                sm:text-lg
                font-bold
                hover:bg-gray-100
                transition-all
              "
              >
                -
              </button>

              <span
                className="
                border
                border-gray-300
                px-3
                sm:px-4
                py-1
                text-base
                sm:text-lg
              "
              >
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                rounded-full
                border
                border-gray-300
                text-base
                sm:text-lg
                font-bold
                hover:bg-gray-100
                transition-all
              "
              >
                +
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1">
            {/* TITLE */}
            <h2
              className="
              text-base
              sm:text-lg
              md:text-xl
              font-medium
              text-black
              line-clamp-2
            "
            >
              {item.title}
            </h2>

            {/* CATEGORY */}
            <p
              className="
              text-gray-500
              mt-2
              text-sm
              md:text-base
            "
            >
              {item.category}
            </p>

            {/* PRICE */}
            <div
              className="
              flex
              items-center
              gap-3
              mt-4
              flex-wrap
            "
            >
              <span
                className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-semibold
              "
              >
                ₹ {(item.price * item.quantity).toFixed(2)}
              </span>

              <span
                className="
                text-gray-400
                line-through
                text-sm
                sm:text-base
                md:text-lg
              "
              >
                ₹ 1999
              </span>

              <span
                className="
                text-green-600
                text-sm
                sm:text-base
                md:text-lg
                font-medium
              "
              >
                45% off
              </span>
            </div>

            {/* DELIVERY */}
            <p
              className="
              mt-5
              text-sm
              md:text-base
              text-black
            "
            >
              Delivery by
              <span className="font-semibold"> Tomorrow</span>
            </p>

            {/* REMOVE */}
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="
              mt-5
              text-sm
              md:text-base
              font-semibold
              hover:text-red-500
              transition-all
            "
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutProducts;
