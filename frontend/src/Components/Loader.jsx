import React from "react";

const Loader = () => {
  return (

    <div
      className="
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
    "
    >

      <div
        className="
        flex
        flex-col
        items-center
        gap-6
      "
      >

        {/* Spinner */}
        <div
          className="
          w-20
          h-20
          border-4
          border-zinc-700
          border-t-red-500
          rounded-full
          animate-spin
        "
        />

        {/* Text */}
        <h1
          className="
          text-white
          text-2xl
          font-bold
          tracking-wide
        "
        >
          Loading Products...
        </h1>

      </div>

    </div>
  );
};

export default Loader;