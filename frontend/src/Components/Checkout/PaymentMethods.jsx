import {
  FaCreditCard,
  FaMoneyBillWave,
  FaUniversity,
  FaMobileAlt,
} from "react-icons/fa";

const PaymentMethods = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <div
      className="
      bg-white
      p-4
      sm:p-5
      md:p-6
      shadow-sm
      border-b
      border-[#E3E3E3]
    "
    >
      {/* HEADING */}
      <h2
        className="
        text-xl
        sm:text-2xl
        font-semibold
        text-black
        mb-6
        md:mb-8
      "
      >
        Select Payment Method
      </h2>

      {/* COD */}
      <div
        onClick={() => setSelectedMethod("cod")}
        className={`
        border-2
        rounded-xl
        p-4
        md:p-5
        flex
        items-center
        gap-3
        md:gap-5
        cursor-pointer
        transition-all

        ${
          selectedMethod === "cod"
            ? `
              border-[#304FB8]
              bg-[#F5F7FF]
            `
            : `
              border-gray-200
            `
        }
      `}
      >
        <div
          className="
          w-10
          h-10
          sm:w-12
          sm:h-12
          md:w-14
          md:h-14
          rounded-full
          bg-[#FFF4E5]
          flex
          items-center
          justify-center
        "
        >
          <FaMoneyBillWave
            className="
            text-lg
            sm:text-xl
            md:text-2xl
            text-[#FB641B]
          "
          />
        </div>

        <div className="flex-1">
          <h3
            className="
            text-base
            sm:text-lg
            md:text-xl
            font-semibold
          "
          >
            Cash On Delivery
          </h3>

          <p
            className="
            text-gray-500
            mt-1
            text-xs
            sm:text-sm
            md:text-base
          "
          >
            Pay when your order arrives
          </p>
        </div>

        <input
          type="radio"
          checked={selectedMethod === "cod"}
          readOnly
          className="
          w-4
          h-4
          md:w-5
          md:h-5
        "
        />
      </div>

      {/* CARD */}
      <div
        onClick={() => setSelectedMethod("card")}
        className={`
        border-2
        rounded-xl
        p-4
        md:p-5
        flex
        items-center
        gap-3
        md:gap-5
        cursor-pointer
        transition-all
        mt-4

        ${
          selectedMethod === "card"
            ? `
              border-[#304FB8]
              bg-[#F5F7FF]
            `
            : `
              border-gray-200
            `
        }
      `}
      >
        <div
          className="
          w-10
          h-10
          sm:w-12
          sm:h-12
          md:w-14
          md:h-14
          rounded-full
          bg-[#EEF2FF]
          flex
          items-center
          justify-center
        "
        >
          <FaCreditCard
            className="
            text-lg
            sm:text-xl
            md:text-2xl
            text-[#304FB8]
          "
          />
        </div>

        <div className="flex-1">
          <h3
            className="
            text-base
            sm:text-lg
            md:text-xl
            font-semibold
          "
          >
            Credit / Debit Card
          </h3>

          <p
            className="
            text-gray-500
            mt-1
            text-xs
            sm:text-sm
            md:text-base
          "
          >
            Secure online card payment
          </p>
        </div>

        <input
          type="radio"
          checked={selectedMethod === "card"}
          readOnly
          className="
          w-4
          h-4
          md:w-5
          md:h-5
        "
        />
      </div>

      {/* UPI */}
      <div
        onClick={() => setSelectedMethod("upi")}
        className={`
        border-2
        rounded-xl
        p-4
        md:p-5
        flex
        items-center
        gap-3
        md:gap-5
        cursor-pointer
        transition-all
        mt-4

        ${
          selectedMethod === "upi"
            ? `
              border-[#304FB8]
              bg-[#F5F7FF]
            `
            : `
              border-gray-200
            `
        }
      `}
      >
        <div
          className="
          w-10
          h-10
          sm:w-12
          sm:h-12
          md:w-14
          md:h-14
          rounded-full
          bg-[#EAFBF1]
          flex
          items-center
          justify-center
        "
        >
          <FaMobileAlt
            className="
            text-lg
            sm:text-xl
            md:text-2xl
            text-green-600
          "
          />
        </div>

        <div className="flex-1">
          <h3
            className="
            text-base
            sm:text-lg
            md:text-xl
            font-semibold
          "
          >
            UPI Payment
          </h3>

          <p
            className="
            text-gray-500
            mt-1
            text-xs
            sm:text-sm
            md:text-base
          "
          >
            Pay using any UPI app
          </p>
        </div>

        <input
          type="radio"
          checked={selectedMethod === "upi"}
          readOnly
          className="
          w-4
          h-4
          md:w-5
          md:h-5
        "
        />
      </div>

      {/* NET BANKING */}
      <div
        onClick={() => setSelectedMethod("bank")}
        className={`
        border-2
        rounded-xl
        p-4
        md:p-5
        flex
        items-center
        gap-3
        md:gap-5
        cursor-pointer
        transition-all
        mt-4

        ${
          selectedMethod === "bank"
            ? `
              border-[#304FB8]
              bg-[#F5F7FF]
            `
            : `
              border-gray-200
            `
        }
      `}
      >
        <div
          className="
          w-10
          h-10
          sm:w-12
          sm:h-12
          md:w-14
          md:h-14
          rounded-full
          bg-[#FFF4E5]
          flex
          items-center
          justify-center
        "
        >
          <FaUniversity
            className="
            text-lg
            sm:text-xl
            md:text-2xl
            text-[#FB641B]
          "
          />
        </div>

        <div className="flex-1">
          <h3
            className="
            text-base
            sm:text-lg
            md:text-xl
            font-semibold
          "
          >
            Net Banking
          </h3>

          <p
            className="
            text-gray-500
            mt-1
            text-xs
            sm:text-sm
            md:text-base
          "
          >
            All major banks supported
          </p>
        </div>

        <input
          type="radio"
          checked={selectedMethod === "bank"}
          readOnly
          className="
          w-4
          h-4
          md:w-5
          md:h-5
        "
        />
      </div>
    </div>
  );
};

export default PaymentMethods;
