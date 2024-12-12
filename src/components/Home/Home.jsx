import React, { useEffect } from "react";
import Header from "./../Header/Header";
import Products from "../Products/Products";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);

  return (
    <div>
      <Header></Header>
      <Products></Products>
    </div>
  );
};

export default Home;
