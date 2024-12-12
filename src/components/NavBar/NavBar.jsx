import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { gadgetContext } from "../../AuthContent/AuthContent";
import "./navbar.css";

const NavBar = () => {
  const { pathname } = useLocation();
  const { gadgetCard, gadgetWishlist } = useContext(gadgetContext);
  const NavItem = (
    <>
      <NavLink className="px-3 py-2 rounded-lg" to={"/"}>
        Home
      </NavLink>
      <NavLink className="px-3 py-2 rounded-lg" to={"/statistics"}>
        Statistics
      </NavLink>
      <NavLink className="px-3 py-2 rounded-lg" to={"/dashboard"}>
        Dashboard
      </NavLink>
    </>
  );
  return (
    <nav
      className={`w-11/12 lg:w-4/5 font-Sora mx-auto navbar   ${
        pathname === "/" ? "text-white" : "text-color1 my-6"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-color3 rounded-box z-[1] mt-3 w-52 sm:p-5 shadow sm:text-2xl sm:font-semibold"
          >
            {NavItem}
          </ul>
        </div>
        <Link to={"/"}>
          <button className=" text-base sm:text-3xl lg:text-2xl font-bold lg:leading-6">
            Gadget Heaven
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:space-x-12 font-medium leading-5 text-base lg:text-2xl">
          {NavItem}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="relative w-9 h-9 bg-white flex items-center justify-center border border-color1.15 rounded-full">
          <AiOutlineShoppingCart className="text-color1 text-xl " />
          <small
            className={` font-bold absolute -top-3 right-0 ${
              pathname === "/" ? "text-white" : "text-color3"
            }`}
          >
            {gadgetCard.length ? gadgetCard.length : ""}
          </small>
        </button>
        <button className="relative w-9 h-9 bg-white flex items-center justify-center border border-color1.15 rounded-full">
          <BsHeart className="text-color1 text-xl " />
          <small
            className={` font-bold absolute -top-3 right-0 ${
              pathname === "/" ? "text-white" : "text-color3"
            }`}
          >
            {gadgetWishlist.length ? gadgetWishlist.length : ""}
          </small>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
