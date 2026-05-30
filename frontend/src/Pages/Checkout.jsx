import { useSelector, useDispatch } from "react-redux";

import CheckoutProducts from "../Components/Checkout/CheckoutProducts.jsx";

import CheckoutSteps from "../Components/Checkout/CheckoutSteps.jsx";

import DeliveryAddress from "../Components/Checkout/DeliveryAddress.jsx";

import { cartCalculations } from "../utils/cartCalculations";
import { useState } from "react";
import PaymentMethods from "../Components/Checkout/PaymentMethods.jsx";
import { useNavigate } from "react-router-dom";
import { successToast } from "../utils/toast";
import { clearCart } from "../features/cart/cartSlice.js";
import { createOrder } from "../services/paymentService.js";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const {
    subtotal,

    shipping,

    tax,

    discount,

    total,

    itemsCount,
  } = cartCalculations(cartItems);

  const [step, setStep] = useState(2);

  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("cod");

  //  console.log(window.Razorpay);
  const handlePayment = async () => {
     try {
       const order = await createOrder(total);
       console.log(order);

       const options = {
         key: import.meta.env.VITE_RAZORPAY_KEY,

         amount: order.amount,

         currency: order.currency,

         order_id: order.id,

         name: "ShopCart",
         method: {
           upi: true,
           card: true,
           netbanking: true,
           wallet: true,
         },
         prefill: {
           name: "Nandkishor",
           email: "nandkishor@example.com",
           contact: "6261775520",
         },

         handler: function (response) {
           console.log(response);

           successToast("Payment Successful");

           dispatch(clearCart());

           navigate("/order-success");
         },
       };
       const razorpay = new window.Razorpay(options);
       razorpay.open();
     } catch (error) {
      console.log(error);
       console.log(error.response?.data);
     }
   
  };

const handlePlaceOrder = async () => {
  // COD
  if (selectedMethod === "cod") {
    successToast("Order Placed Successfully");

    dispatch(clearCart());

    navigate("/order-success");

    return;
  }
  // ONLINE PAYMENT
  await handlePayment();
};

  return (
    <div
      className="
      min-h-screen
      bg-zinc-100
      py-6
      md:py-10
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        grid
        grid-cols-1
        lg:grid-cols-[2fr_1fr]
        gap-4
        md:gap-6
      "
      >
        {/* LEFT SIDE */}
        <div className="space-y-4">
          {/* CHECKOUT STEPS */}
          <div
            className="
            bg-white
            rounded-lg
            shadow-sm
            w-full
            overflow-hidden
          "
          >
            <CheckoutSteps step={step} setStep={setStep}/>
          </div>

          {step === 2 ? (
            <>
              <div
                className="
                bg-white
                rounded-lg
                shadow-sm
                w-full
                overflow-hidden
              "
              >
                <DeliveryAddress />
              </div>

              <div
                className="
                bg-white
                rounded-lg
                shadow-sm
                w-full
                overflow-hidden
              "
              >
                <CheckoutProducts />
              </div>
            </>
          ) : (
            <PaymentMethods
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
            />
          )}
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
          bg-white
          rounded-lg
          p-4
          md:p-6
          shadow-sm
          h-fit
          lg:sticky
          lg:top-24
        "
        >
          {/* HEADING */}
          <h2
            className="
            text-lg
            md:text-xl
            font-semibold
            text-gray-500
            border-b
            border-[#E3E3E3]
            pb-4
          "
          >
            PRICE DETAILS
          </h2>

          {/* DETAILS */}
          <div className="space-y-5 mt-6">
            <div
              className="
              flex
              items-center
              justify-between
              text-sm
              sm:text-base
              md:text-lg
            "
            >
              <span className="text-gray-700">Price ({itemsCount} items)</span>

              <span>₹ {subtotal.toFixed(2)}</span>
            </div>

            <div
              className="
              flex
              items-center
              justify-between
              text-sm
              sm:text-base
              md:text-lg
            "
            >
              <span className="text-gray-700">Discount</span>

              <span
                className="
                text-green-600
                font-medium
              "
              >
                - ₹ {discount.toFixed(2)}
              </span>
            </div>

            <div
              className="
              flex
              items-center
              justify-between
              text-sm
              sm:text-base
              md:text-lg
            "
            >
              <span className="text-gray-700">Delivery Charges</span>

              {shipping === 0 ? (
                <span
                  className="
                  text-green-600
                  font-medium
                "
                >
                  FREE
                </span>
              ) : (
                <span>₹ {shipping.toFixed(2)}</span>
              )}
            </div>

            <div
              className="
              flex
              items-center
              justify-between
              text-sm
              sm:text-base
              md:text-lg
            "
            >
              <span className="text-gray-700">Tax</span>

              <span>₹ {tax.toFixed(2)}</span>
            </div>
          </div>

          {/* TOTAL */}
          <div
            className="
            border-t
            border-b
            border-[#E3E3E3]
            py-5
            mt-6
            flex
            items-center
            justify-between
          "
          >
            <span
              className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-semibold
            "
            >
              Total Amount
            </span>

            <span
              className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-bold
            "
            >
              ₹ {total.toFixed(2)}
            </span>
          </div>

          {/* SAVE TEXT */}
          <div
            className="
            mt-5
            text-green-600
            text-sm
            md:text-lg
            font-medium
          "
          >
            You will save ₹ {discount.toFixed(2)}
            on this order
          </div>

          {/* BUTTON */}
          <button
            onClick={() => {
              if (step === 2) {
                setStep(3);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                handlePlaceOrder();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="
            w-full
            mt-8
            bg-[#FB641B]
            hover:bg-[#E85A16]
            py-3
            md:py-4
            text-base
            md:text-lg
            font-semibold
            text-white
            rounded-lg
            transition-all
            duration-300
            cursor-pointer
          "
          >
            {step === 2
              ? "CONTINUE"
              : selectedMethod === "cod"
                ? "PLACE ORDER"
                : "PAY NOW"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
