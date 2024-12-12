import React from "react";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-11/12 lg:w-4/5 2xl:w-[72%] h-[400px] sm:h-[600px] lg:h-[694px] 2xl:h-[650px] mx-auto relative top-0 left-0 ">
      {/* banner description */}
      <div className="flex flex-col justify-center items-center my-12 space-y-5 sm:space-y-10 lg:space-y-7">
        <h1 className="font-bold text-xl sm:text-4xl lg:text-56 lg:leading-72 text-white text-center">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="font-normal text-base sm:text-2xl leading-7 text-white text-center ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="font-bold text-xl sm:text-3xl lg:text-xl bg-white text-color3 rounded-full px-8 py-4">
          Shop Now
        </button>
      </div>
      {/* Banner Image */}
      <div className="p-2 sm:p-3 lg:p-6 w-11/12 sm:w-10/12 lg:w-11/12 2xl:w-10/12 lg:h-[563px] rounded-[32px]  border-2 sm:border-4 border-white absolute top-[72%] sm:top-[68%] lg:top-[62%] 2xl:top-[60%] left-[4%] sm:left-[9%] lg:left-[4%] 2xl:left-[8%] mx-auto">
        <img className="rounded-[32px] w-full h-full" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
