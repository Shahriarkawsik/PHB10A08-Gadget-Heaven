import { useEffect } from "react";
import StatChart from "./StatChart";

const Statistics = () => {

  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  
  return (
    <div>
      <div className="bg-color3">
        <div className="w-11/12 lg:w-4/5 mx-auto">
          {/* banner description */}
          <div className="flex flex-col text-white justify-center items-center py-10 space-y-5 sm:space-y-10 lg:space-y-7">
            <h1 className="font-bold text-xl sm:text-4xl lg:text-3xl lg:leading-10 text-center">
              Statistics
            </h1>
            <p className="font-normal text-base sm:text-2xl leading-7 text-center ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="bg-gray-100 py-12">
          <div className="w-11/12 lg:w-4/5 mx-auto space-y-12">
            <h1 className="font-bold text-color1 lg:text-2xl">Statistics</h1>
            {/* Statistics */}
            <div className="bg-white rounded-2xl p-8 flex items-center justify-between">
              <StatChart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
