import React from "react";

const DeliveryAddress = () => {
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
      {/* TOP */}
      <div
        className="
        flex
        flex-col
        md:flex-row
        md:items-start
        md:justify-between
        gap-5
      "
      >
        {/* LEFT */}
        <div className="space-y-2">
          <p
            className="
            text-gray-700
            text-sm
            sm:text-base
            md:text-lg
          "
          >
            Deliver to:
          </p>

          {/* Name + Badge */}
          <div
            className="
            flex
            flex-wrap
            items-center
            gap-2
            sm:gap-3
          "
          >
            <h2
              className="
              text-lg
              sm:text-xl
              font-semibold
              text-black
            "
            >
              Nandkishor Pal
            </h2>

            <span
              className="
              bg-[#F0F0F0]
              text-gray-700
              text-xs
              sm:text-sm
              px-3
              py-1
              rounded-md
              font-medium
            "
            >
              HOME
            </span>
          </div>

          {/* Address */}
          <p
            className="
            text-gray-700
            text-sm
            sm:text-base
            leading-relaxed
            max-w-3xl
          "
          >
            774, Sai Kripa Colony, Maha Laxmi Nagar, Indore 452010
          </p>

          {/* Phone */}
          <p
            className="
            text-black
            text-sm
            sm:text-base
            font-medium
          "
          >
            +91 6261775520
          </p>
        </div>

        {/* BUTTON */}
        <button
          className="
          w-full
          md:w-auto
          border
          border-[#D1D5DB]
          px-5
          py-2
          text-[#2F55DE]
          font-medium
          rounded-md
          hover:bg-[#F5F7FF]
          transition-all
        "
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default DeliveryAddress;
