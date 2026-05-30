 
import { useSelector } from "react-redux";

import { NavLink, useNavigate }
from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

 
const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

  const {cartItems} = useSelector((state)=>state.cart);
  const navigate= useNavigate()

   const handleNavigation = (sectionId)=>{
    navigate("/");
     setTimeout(()=>{
      document.getElementById(sectionId)?.scrollIntoView({
      behavior:"smooth"
    })
     },100)
   }
  
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-xl font-bold">
              S
            </div>

            <h1 className="text-xl md:text-2xl font-bold">
              Shop<span className="text-red-500">Cart</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            <li
              onClick={() => handleNavigation("home")}
              className="cursor-pointer hover:text-red-400"
            >
              Home
            </li>

            <li>
              <NavLink to="/products">Products</NavLink>
            </li>

            <li
              onClick={() => handleNavigation("about")}
              className="cursor-pointer hover:text-red-400"
            >
              About
            </li>

            <li
              onClick={() => handleNavigation("contact")}
              className="cursor-pointer hover:text-red-400"
            >
              Contact
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div
              onClick={() => {
                navigate("/mycart");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="relative cursor-pointer"
            >
              <FaShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col py-4">
            <li
              className="px-6 py-3 hover:bg-gray-900 cursor-pointer"
              onClick={() => {
                handleNavigation("home");
                setMenuOpen(false);
              }}
            >
              Home
            </li>

            <li className="px-6 py-3 hover:bg-gray-900">
              <NavLink to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </NavLink>
            </li>

            <li
              className="px-6 py-3 hover:bg-gray-900 cursor-pointer"
              onClick={() => {
                handleNavigation("about");
                setMenuOpen(false);
              }}
            >
              About
            </li>

            <li
              className="px-6 py-3 hover:bg-gray-900 cursor-pointer"
              onClick={() => {
                handleNavigation("contact");
                setMenuOpen(false);
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;