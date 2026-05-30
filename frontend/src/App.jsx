import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import MainLayout from "./layout/MainLayout";
import Cart from "./Pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mycart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
        newestOnTop={true}
        pauseOnHover={true}
      />
    </div>
  );
}

export default App;
