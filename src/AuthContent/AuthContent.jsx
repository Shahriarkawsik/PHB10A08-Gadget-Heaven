import React, { createContext, useEffect, useState } from "react";

export const gadgetContext = createContext(null);
const AuthContent = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [gadgetCard, setGadgetCard] = useState([]);
  const [gadgetWishlist, setGadgetWishlist] = useState([]);
  const [totalCardPrice, setTotalCardPrice] = useState(0);

  const authInfo = {
    products,
    setProducts,
    gadgetCard,
    setGadgetCard,
    gadgetWishlist,
    setGadgetWishlist,
    totalCardPrice,
    setTotalCardPrice,
  };
  return (
    <gadgetContext.Provider value={authInfo}>{children}</gadgetContext.Provider>
  );
};

export default AuthContent;
