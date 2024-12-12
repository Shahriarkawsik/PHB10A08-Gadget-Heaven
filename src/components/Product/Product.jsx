import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;
  const { id } = useParams();
  return (
    <section className="bg-white rounded-2xl p-3 sm:p-3 lg:p-5 border space-y-3 sm:space-y-4 lg:space-y-4 font-Sora">
      <div className="bg-color6 w-full  rounded-2xl">
        <img className="w-full rounded-2xl" src={product_image} alt="" />
      </div>
      <h3 className="font-semibold lg:text-24 leading-8 text-color2">
        {product_title}
      </h3>
      <p className="font-medium lg:text-xl leading-6 text-color2.6">
        Price: {price} $
      </p>
      <div>
        <Link to={`/product/${product_id}`}>
          <button className="font-bold text-base sm:text-xl lg:text-base border border-color3 text-color3 hover:text-white hover:bg-color3 hover:border-none  rounded-full px-4 sm:px-5  py-2 sm:py-3">
            View Details
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Product;
