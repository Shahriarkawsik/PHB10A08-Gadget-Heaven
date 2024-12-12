import React, { useContext, useEffect, useState } from "react";
import { gadgetContext } from "../../AuthContent/AuthContent";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useContext(gadgetContext);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    setSelectedProduct(products);
  }, [products]);

  // check Product category
  const categories = [
    "All Product",
    "Laptops",
    "Phones",
    "Cameras",
    "Air Pods",
    "Chargers",
  ];
  const handleCategory = (index) => {
    setSelectedCategory(index);
    const selCategory = categories[index].toLowerCase();
    handleFilterData(selCategory);
  };
  const handleFilterData = (selCategory) => {
    if (selCategory === "all product") {
      setSelectedProduct(products);
    } else {
      const product = products.filter((item) => item.category === selCategory);
      setSelectedProduct(product);
    }
  };
  return (
    <section className="w-11/12 sm:w-11/12 lg:w-11/12 2xl:w-4/5 mx-auto mt-[170px] sm:mt-[240px] lg:mt-[320px] 2xl:mt-[350px] font-Sora space-y-6 sm:space-y-8 lg:space-y-10">
      <h1 className="font-bold text-color1 hover:text-color3 text-2xl sm:text-40 lg:text-3xl 2xl:text-40 2xl:leading-50 text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      {/* show product */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 ">
        {/* Category section */}

        <div className="col-span-1 sm:col-span-1 lg:col-span-1 border rounded-xl max-h-fit py-4 lg:p-3 2xl:p-6 space-y-3 lg:space-y-3">
          <div className="flex flex-col gap-3">
            {categories.map((category, index) => (
              <button
                className={`px-6 py-3 rounded-full ${
                  selectedCategory === index
                    ? "bg-color3 text-white"
                    : "bg-color2.05 text-color2.6"
                } `}
                onClick={() => handleCategory(index)}
                key={index}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`${
            selectedProduct.length > 0
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-2  sm:col-span-3 lg:col-span-5  gap-4 lg:gap-6"
              : "col-span-2 sm:col-span-3 lg:col-span-5"
          }`}
        >
          {selectedProduct.length > 0 ? (
            selectedProduct.map((product, product_id) => (
              <Product key={product_id} product={product}></Product>
            ))
          ) : (
            <h1 className="text-color3 text-2xl font-bold text-center">
              No data found
            </h1>
            // <div className="w-full bg-color3 text-white flex items-center justify-center">
            // </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
