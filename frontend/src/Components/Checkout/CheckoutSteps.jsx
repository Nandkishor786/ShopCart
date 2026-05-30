const CheckoutSteps = ({ step ,setStep}) => {
  return (
    <div
      className="
bg-white
p-4
sm:p-6
md:p-8
shadow-sm
flex
items-start
justify-between
border-b-2
border-[#E3E3E3]
"
    >
      {/* STEP 1 */}
      <div
        onClick={() => setStep(1)}
        className="
        flex
        flex-col
        items-center
        flex-1
        w-full
        cursor-pointer

      "
      >
        <div
          className={`
          w-10
          h-10
          sm:w-12
          sm:h-12
          md:w-14
          md:h-14
          rounded-full
          flex
          items-center
          justify-center
          text-lg
          sm:text-xl
          md:text-2xl
          font-bold
          transition-all
          duration-300

          ${
            step >= 1
              ? `
                bg-[#F0F1FF]
                text-[#304FB8]
                border-2
                border-[#304FB8]
              `
              : `
                bg-white
                text-gray-400
                border-2
                border-gray-300
              `
          }
        `}
        >
          {step > 1 ? "✓" : "1"}
        </div>

        <p
          className="
          mt-2
          md:mt-3
          text-xs
          sm:text-sm
          md:text-lg
          font-medium
          text-[#686A6B]
          text-center
        "
        >
          Address
        </p>
      </div>

      {/* LINE */}
      <div
        className={`
        h-[3px]
        flex-1
        mx-2
        sm:mx-3
        md:mx-4
        rounded-full
        mt-5
        sm:mt-6

        ${step >= 2 ? "bg-[#415FAB]" : "bg-gray-300"}
      `}
      />

      {/* STEP 2 */}
      <div
        onClick={() => setStep(2)}
        className="
        flex
        flex-col
        items-center
        flex-1
        w-full
      cursor-pointer

      "
      >
        <div
          className={`
          w-10
          h-10
          sm:w-12
          sm:h-12
          md:w-14
          md:h-14
          rounded-full
          flex
          items-center
          justify-center
          text-lg
          sm:text-xl
          md:text-2xl
          font-bold
          transition-all
          duration-300

          ${
            step === 2
              ? `
                bg-[#304FB8]
                text-white
                border-2
                border-[#304FB8]
              `
              : `
                bg-[#F0F1FF]
                text-[#304FB8]
                border-2
                border-[#304FB8]
              `
          }
        `}
        >
          {step > 2 ? "✓" : "2"}
        </div>

        <p
          className={`
          mt-2
          md:mt-3
          text-xs
          sm:text-sm
          md:text-lg
          font-medium
          text-center

          ${step > 2 ? "text-[#686A6B]" : "text-black"}
        `}
        >
          Order Summary
        </p>
      </div>

      {/* LINE */}
      <div
        className={`
        h-[3px]
        flex-1
        mx-2
        sm:mx-3
        md:mx-4
        rounded-full
        mt-5
        sm:mt-6

        ${step >= 3 ? "bg-[#415FAB]" : "bg-gray-300"}
      `}
      />

      {/* STEP 3 */}
      <div
        onClick={() => setStep(3)}
        className="
        flex
        flex-col
        items-center
        flex-1
        w-full
        cursor-pointer
      "
      >
        <div
          className={`
          w-10
          h-10
          sm:w-12
          sm:h-12
          md:w-14
          md:h-14
          rounded-full
          flex
          items-center
          justify-center
          text-lg
          sm:text-xl
          md:text-2xl
          font-bold
          transition-all
          duration-300

          ${
            step >= 3
              ? `
                bg-[#304FB8]
                text-white
                border-2
                border-[#304FB8]
              `
              : `
                bg-white
                text-gray-400
                border-2
                border-gray-300
              `
          }
        `}
        >
          3
        </div>

        <p
          className={`
          mt-2
          md:mt-3
          text-xs
          sm:text-sm
          md:text-lg
          font-medium
          text-center

          ${step === 3 ? "text-black" : "text-[#686A6B]"}
        `}
        >
          Payment
        </p>
      </div>
    </div>
  );
};

export default CheckoutSteps;
