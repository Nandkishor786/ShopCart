 
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {

   const navigate = useNavigate();

  const handleNavigation = (sectionId)=>{
        navigate("/");

        setTimeout(()=>{
        document.getElementById(sectionId)?.scrollIntoView({
          behavior:"smooth"
        })
        },100)
  }


  return (

    <footer
      className="
      w-full
      bg-zinc-950
      border-t
      border-zinc-800
      text-white
      py-16
      px-6
      md:px-12
    "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-4
        gap-12
      "
      >

        {/* Logo Section */}
        <div
     onClick={()=>handleNavigation("home")} className="cursor-pointer">

          <div
            className="
            flex
            items-center
            gap-3
            mb-6
          "
          >

            {/* Logo */}
            <div
              className="
              w-12
              h-12
              rounded-2xl
              bg-linear-to-r
              from-red-500
              to-red-700
              flex
              items-center
              justify-center
              text-white
              text-3xl
              font-extrabold
              
            "
            >
              S
            </div>

            <h1
              className="
              text-3xl
              font-bold
            "
            >
              Shop
              <span className="text-red-500">
                Cart
              </span>
            </h1>

          </div>

          <p
            className="
            text-gray-400
            leading-relaxed
          "
          >
            Premium ecommerce shopping
            experience built using React,
            Redux Toolkit, and Tailwind CSS.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2
            className="
            text-2xl
            font-bold
            mb-6
          "
          >
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li
            onClick={()=>handleNavigation("home")}
             className="hover:text-red-500 cursor-pointer">
              Home
            </li>

           <li>
  <NavLink
    to="/products"
    className="
    hover:text-red-500
    cursor-pointer
    "
  >
    Products
  </NavLink>
</li>

            <li 
            onClick={()=>handleNavigation("about")}
            className="hover:text-red-500 cursor-pointer">
              About
            </li>

            <li 
              onClick={()=>handleNavigation("contact")}
            className="hover:text-red-500 cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Support */}
        <div>

          <h2
            className="
            text-2xl
            font-bold
            mb-6
          "
          >
            Support
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-red-500 cursor-pointer">
              Help Center
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Terms & Conditions
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              FAQs
            </li>

          </ul>

        </div>

        {/* Social Icons */}
        <div>

          <h2
            className="
            text-2xl
            font-bold
            mb-6
          "
          >
            Follow Us
          </h2>

          <div className="flex gap-5">

            <div
              className="
              w-12
              h-12
              rounded-full
              bg-zinc-900
              border
              border-zinc-800
              flex
              items-center
              justify-center
              hover:bg-red-500
              transition-all
              duration-300
              cursor-pointer
            "
            >
              <FaFacebookF size={20} />
            </div>

            <div
              className="
              w-12
              h-12
              rounded-full
              bg-zinc-900
              border
              border-zinc-800
              flex
              items-center
              justify-center
              hover:bg-red-500
              transition-all
              duration-300
              cursor-pointer
            "
            >
              <FaInstagram size={20} />
            </div>

            <div
              className="
              w-12
              h-12
              rounded-full
              bg-zinc-900
              border
              border-zinc-800
              flex
              items-center
              justify-center
              hover:bg-red-500
              transition-all
              duration-300
              cursor-pointer
            "
            >
              <FaTwitter size={20} />
            </div>

            <div
              className="
              w-12
              h-12
              rounded-full
              bg-zinc-900
              border
              border-zinc-800
              flex
              items-center
              justify-center
              hover:bg-red-500
              transition-all
              duration-300
              cursor-pointer
            "
            >
              <FaGithub size={20} />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div
        className="
        border-t
        border-zinc-800
        mt-14
        pt-6
        text-center
        text-gray-500
      "
      >
        © 2026 ShopCart. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;