import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { gadgetContext } from "../../AuthContent/AuthContent";
import { Alert } from "./../../Alert/Alert";

const WishList = () => {
  const { gadgetCard, setGadgetCard, gadgetWishlist, setGadgetWishlist } =
    useContext(gadgetContext);
  const handleAddToCard = (product) => {
    if (gadgetCard.includes(product)) {
      Alert(false, "Already added in card");
      return;
    }
    setGadgetCard([...gadgetCard, product]);
    Alert(true, "Add Product to Your Cart");
  };
  return (
    <>
      {gadgetWishlist.length === 0 ? (
        <h1 className="font-bold text-red-500 lg:text-2xl my-12 text-center">
          No product is added to Wishlist
        </h1>
      ) : (
        <div className="bg-gray-100 py-12">
          <div className="w-11/12 lg:w-4/5 mx-auto space-y-12">
            <h1 className="font-bold text-color1 lg:text-2xl">WishList</h1>
            {/* Gadget */}
            <div className="space-y-5">
              {gadgetWishlist.map((gadget) => (
                <>
                  <div
                    key={gadget.product_id}
                    className="bg-white rounded-2xl p-8 grid items-center justify-between grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5"
                  >
                    <div className="p-3 rounded-xl shadow-md lg:col-span-1">
                      <img
                        className="mx-auto"
                        src={gadget?.product_image}
                        alt=""
                      />
                    </div>
                    <div className="lg:col-span-2 flex justify-between items-center">
                      <div className="space-y-5">
                        <h1 className="font-semibold text-color2 lg:text-24 leading-8 ">
                          {gadget?.product_title}
                        </h1>
                        <p className=" text-color2.6 lg:text-18 leading-8 ">
                          {gadget?.description}
                        </p>
                        <p className="font-semibold text-color2.8 lg:text-xl leading-8 ">
                          Price: ${gadget?.price}
                        </p>
                        <button
                          onClick={() => handleAddToCard(gadget)}
                          className="font-medium sm:font-bold text-base sm:text-xl lg:text-base bg-color3 text-white 
                rounded-full px-5 py-2 lg:px-3 2xl:px-8 lg:py-3 "
                        >
                          Add To Card
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          const remainGadgetInCard = gadgetWishlist.filter(
                            (item) => item.product_id !== gadget.product_id
                          );
                          setGadgetWishlist(remainGadgetInCard);
                          Alert(
                            true,
                            "Successfully remove Gadget from Wishlist."
                          );
                        }}
                      >
                        <TiDeleteOutline className="text-red-600 text-3xl" />
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WishList;
