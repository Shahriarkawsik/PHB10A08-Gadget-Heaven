import React, { useContext, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { gadgetContext } from "./AuthContent/AuthContent";

const Root = () => {
  const { setProducts } = useContext(gadgetContext);
  const { pathname } = useLocation();
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      {pathname == "/" || <NavBar></NavBar>}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
