 
  const About = () => {
    return (
      <section
        id="about"
        className="
        w-full
        bg-black
        text-white
        py-16
        sm:py-20
        md:py-24
        px-4
        sm:px-6
        md:px-12
      "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          lg:gap-16
          items-center
        "
        >
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f"
              alt="about"
              className="
              rounded-3xl
              shadow-2xl
              object-cover
              w-full
              h-[300px]
              sm:h-[400px]
              md:h-[500px]
            "
            />

            <div
              className="
              absolute
              bottom-4
              right-4
              md:-bottom-6
              md:-right-6
              bg-red-500
              text-white
              px-5
              py-3
              md:px-6
              md:py-4
              rounded-2xl
              shadow-xl
            "
            >
              <h2 className="text-2xl md:text-3xl font-bold">10K+</h2>

              <p className="text-xs md:text-sm">Happy Customers</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2
              className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              mb-6
              md:mb-8
            "
            >
              About
              <span className="text-red-500"> ShopCart</span>
            </h2>

            <p
              className="
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              mb-6
            "
            >
              ShopCart is a modern full-stack e-commerce platform designed to
              deliver a seamless and secure online shopping experience. Users
              can explore products, manage their shopping cart, and complete
              purchases through an intuitive and user-friendly interface.
            </p>

            <p
              className="
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              mb-8
            "
            >
              Built with React, Redux Toolkit, Node.js, Express.js, MongoDB
              Atlas, and Razorpay, ShopCart showcases modern web development
              practices, secure payment integration, responsive design, and
              scalable architecture for real-world e-commerce applications. 
            </p>

            {/* Stats */}
            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              md:gap-6
            "
            >
              <div
                className="
                bg-zinc-900
                border
                border-zinc-800
                p-6
                rounded-2xl
                text-center
                hover:border-red-500
                transition
              "
              >
                <h3
                  className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-red-500
                  mb-2
                "
                >
                  500+
                </h3>

                <p className="text-gray-400">Premium Products</p>
              </div>

              <div
                className="
                bg-zinc-900
                border
                border-zinc-800
                p-6
                rounded-2xl
                text-center
                hover:border-red-500
                transition
              "
              >
                <h3
                  className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-red-500
                  mb-2
                "
                >
                  24/7
                </h3>

                <p className="text-gray-400">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default About;
