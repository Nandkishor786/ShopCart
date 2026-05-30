 
import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  fetchProducts
} from "../features/products/productSlice";

import {
  useEffect
} from "react";

import Loader
from "../Components/Loader";

 
import ProductCard from "../Components/ProductCard";

const Products = () => {

  const dispatch = useDispatch();

  const {
    products,
    error,
    loading
  } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    
    window.scrollTo(0,0);
    dispatch(fetchProducts());

  }, [dispatch]);

  // Loading
  if (loading) {
    return <Loader />;
  }

  // Error
  if (error) {

    return (

      <div
        className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        text-red-500
        text-3xl
        font-bold
      "
      >
        {error}
      </div>

    );

  }

  return (

    <div
      className="
      min-h-screen
      bg-black
      text-white
    "
    >

     
      {/* Heading */}
      <div
        className="
        text-center
        py-14
      "
      >

        <h1
          className="
          text-5xl
          md:text-6xl
          font-extrabold
          mb-5
        "
        >
          Our
          <span className="text-red-500">
            {" "}Products
          </span>
        </h1>

        <p
          className="
          text-gray-400
          text-lg
          max-w-2xl
          mx-auto
        "
        >
          Explore premium quality products
          built for modern shopping
          experience.
        </p>

      </div>

      {/* Products Grid */}
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        pb-20
        grid
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-10
      "
      >
        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;