import React from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="lg:m-[30px] border border-color5  rounded-3xl  ">
      <div className="m-1 bg-color3 rounded-3xl">
        {pathname == "/" && <NavBar></NavBar>}
        <Banner></Banner>
      </div>
    </header>
  );
};

export default Header;
