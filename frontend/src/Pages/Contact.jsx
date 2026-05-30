import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
      w-full
      bg-black
      text-white
      py-16
      md:py-24
      px-4
      sm:px-6
      md:px-12
    "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            mb-6
          "
          >
            Get In
            <span className="text-red-500"> Touch</span>
          </h1>

          <p
            className="
            text-gray-400
            text-base
            md:text-lg
            max-w-2xl
            mx-auto
          "
          >
            Have questions or need help? We would love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-14
          items-start
        "
        >
          {/* Left Side */}
          <div className="space-y-6">
            {/* Email */}
            <div
              className="
              flex
              items-center
              gap-4
              bg-zinc-900
              border
              border-zinc-800
              p-5
              rounded-3xl
              hover:border-red-500
              transition-all
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-red-500/10
                flex
                items-center
                justify-center
                text-red-500
                text-2xl
              "
              >
                <FiMail />
              </div>

              <div>
                <h2 className="text-lg md:text-2xl font-bold">Email</h2>
                <p className="text-gray-400">support@shopcart.com</p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="
              flex
              items-center
              gap-4
              bg-zinc-900
              border
              border-zinc-800
              p-5
              rounded-3xl
              hover:border-red-500
              transition-all
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-red-500/10
                flex
                items-center
                justify-center
                text-red-500
                text-2xl
              "
              >
                <FiPhone />
              </div>

              <div>
                <h2 className="text-lg md:text-2xl font-bold">Phone</h2>
                <p className="text-gray-400">+91 6261775520</p>
              </div>
            </div>

            {/* Location */}
            <div
              className="
              flex
              items-center
              gap-4
              bg-zinc-900
              border
              border-zinc-800
              p-5
              rounded-3xl
              hover:border-red-500
              transition-all
            "
            >
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-red-500/10
                flex
                items-center
                justify-center
                text-red-500
                text-2xl
              "
              >
                <FiMapPin />
              </div>

              <div>
                <h2 className="text-lg md:text-2xl font-bold">Location</h2>
                <p className="text-gray-400">Indore, Madhya Pradesh</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="
            bg-zinc-900
            border
            border-zinc-800
            p-6
            md:p-10
            rounded-3xl
            space-y-6
          "
          >
            <div>
              <label className="block mb-2">Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="
                w-full
                bg-black
                border
                border-zinc-700
                rounded-xl
                px-4
                py-3
                md:px-5
                md:py-4
                outline-none
                focus:border-red-500
              "
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                w-full
                bg-black
                border
                border-zinc-700
                rounded-xl
                px-4
                py-3
                md:px-5
                md:py-4
                outline-none
                focus:border-red-500
              "
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="
                w-full
                bg-black
                border
                border-zinc-700
                rounded-xl
                px-4
                py-3
                md:px-5
                md:py-4
                outline-none
                resize-none
                focus:border-red-500
              "
              />
            </div>

            <button
              className="
              w-full
              bg-red-500
              hover:bg-red-600
              py-3
              md:py-4
              rounded-xl
              text-base
              md:text-lg
              font-bold
              transition-all
              cursor-pointer
            "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
