import { useEffect, useState } from "react";
import Card from "../Card/Card";
import WishList from "../WishList/WishList";


const Dashboard = () => {
  const [toggle, setToggle] = useState({ item: "card", status: true });
  /*************** Title ********************/
 
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);
  /*************** Title ********************/
  // toggle 😝
  const handleCart = () => {
    setToggle({ item: "card", status: true });
    // document.getElementById("paymentModal").showModal();
  };
  const handleWishlist = () => {
    setToggle({ item: "wishlist", status: false });
  };

  return (
    <div>
      <div className="bg-color3">
        <div className="w-11/12 lg:w-4/5 mx-auto">
          {/* banner description */}
          <div className="flex flex-col text-white justify-center items-center py-10 space-y-5 sm:space-y-10 lg:space-y-7">
            <h1 className="font-bold text-xl sm:text-4xl lg:text-3xl lg:leading-10 text-center">
              Dashboard
            </h1>
            <p className="font-normal text-base sm:text-2xl leading-7 text-center ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleCart({ item: "card", status: true })}
                className={`font-medium sm:font-bold text-base sm:text-xl lg:text-xl  
                rounded-full px-8 py-2 lg:px-8 2xl:px-14 lg:py-3 ${
                  toggle.status
                    ? "text-color3 bg-white"
                    : "border border-white text-white "
                }`}
              >
                Card
              </button>
              <button
                onClick={() =>
                  handleWishlist({ item: "wishlist", status: false })
                }
                className={`font-medium sm:font-bold text-base sm:text-xl lg:text-xl rounded-full px-8 py-2 lg:px-8 2xl:px-14 lg:py-3  ${
                  toggle.status
                    ? "border border-white text-white "
                    : "text-color3 bg-white"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* toggle Card and Wishlist */}
      {toggle.status ? <Card /> : <WishList />}
      
    </div>
  );
};

export default Dashboard;
