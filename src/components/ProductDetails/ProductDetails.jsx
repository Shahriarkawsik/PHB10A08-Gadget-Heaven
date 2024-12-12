import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { gadgetContext } from "../../AuthContent/AuthContent";
// import Product from "./../Product/Product";
import { Alert } from "./../../Alert/Alert";

const ProductDetails = () => {
  const { gadgetCard, setGadgetCard, gadgetWishlist, setGadgetWishlist } =
    useContext(gadgetContext);
  const { id } = useParams();
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === id);
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  const handleAddToCard = (product) => {
    let flag = false;
    for (const item of gadgetCard) {
      if (item.product_id === product.product_id) {
        flag = true;
        break;
      }
    }
    if (flag) {
      Alert(false, "Already added in card");
    } else {
      setGadgetCard([...gadgetCard, product]);
      Alert(true, "Add Product to Your Cart");
    }
  };

  const handleWishlist = (product) => {
    let flag = false;
    for (const item of gadgetWishlist) {
      if (item.product_id === product.product_id) {
        flag = true;
        break;
      }
    }
    if (flag) {
      Alert(false, "Already added in card");
    } else {
      setGadgetWishlist([...gadgetWishlist, product]);
      Alert(true, "Add Product to Your Cart");
    }
  };

  return (
    <div>
      <div className="bg-color3 font-Sora rounded-lg">
        <div className="w-11/12 lg:w-4/5 mx-auto 2xl:w-[72%] h-[400px] sm:h-[400px] lg:h-[694px] 2xl:h-[450px] relative top-0 left-0 p-3 2xl:p-8 ">
          {/* banner description */}
          <div className="flex flex-col justify-center items-center my-12 space-y-5 sm:space-y-10 lg:space-y-7">
            <h1 className="font-bold text-xl sm:text-4xl lg:text-3xl lg:leading-10 text-white text-center">
              Product Details
            </h1>
            <p className="font-normal text-base sm:text-2xl leading-7 text-white text-center ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          {/* Banner Image lg:h-[563px]*/}
          <div className="p-2 sm:p-3 lg:p-6 2xl:p-8 w-11/12 sm:w-10/12 lg:w-11/12 2xl:w-10/12 rounded-[32px] bg-white  absolute top-[72%] sm:top-[68%] lg:top-[62%] 2xl:top-[60%] left-[4%] sm:left-[9%] lg:left-[4%] 2xl:left-[8%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8 shadow-lg">
            <div className="shadow-lg rounded-[32px] p-3">
              <img
                className="rounded-[32px] w-full h-full "
                src={product_image}
                alt={product_title}
              />
            </div>
            <div className="space-y-3 px-3 py-5">
              <h1 className="font-bold text-xl sm:text-24 lg:text-28  leading-9 text-color2">
                {product_title}
              </h1>
              <p className="font-semibold text-xl sm:text-xl lg:text-xl leading-8 text-color2.6">
                Price: {price} $
              </p>
              <button className="bg-color4.1 text-color4 px-4 py-2 rounded-full border border-color4">
                {availability ? "In stock" : "Stock Out"}
              </button>
              <p className="text-18 sm:text-xl lg:text-xl leading-7 text-color2.6">
                {description}
              </p>
              <div className="space-y-3">
                <p className="font-bold text-18 sm:text-xl lg:text-xl leading-8 text-color2.8">
                  Specification:
                </p>
                <ol className="px-6 space-y-2 text-18 leading-8 text-color2.6">
                  {Specification.map((item, index) => (
                    <li className="list-decimal" key={index}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-bold text-18 sm:text-xl lg:text-xl leading-8 text-color2.8">
                  Rating:
                </h2>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500 text-2xl" />
                  <FaStar className="text-yellow-500 text-2xl" />
                  <FaStar className="text-yellow-500 text-2xl" />
                  <FaStar className="text-yellow-500 text-2xl" />
                  <FaRegStar className="text-color2 text-2xl font-semibold" />
                  <button className="rounded-full text-color2 px-3 py-1 bg-color2.05">
                    {rating}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleAddToCard(product)}
                  className="font-medium sm:font-bold text-base sm:text-xl lg:text-base bg-color3 text-white hover:bg-white hover:text-color3 border hover:border-color3 
                rounded-full px-5 py-2 lg:px-3 2xl:px-8 lg:py-3 flex justify-center items-center gap-2"
                >
                  <span>Add To Card </span>
                  <AiOutlineShoppingCart className=" text-xl " />
                </button>
                <button
                  onClick={() => handleWishlist(product)}
                  className="bg-white border border-color1.15 p-2 rounded-full hover:border hover:border-color3 "
                >
                  <BsHeart className="text-color1 text-xl " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[800px] sm:h-[1000px] lg:h-[350px]"></div>
    </div>
  );
};

export default ProductDetails;
