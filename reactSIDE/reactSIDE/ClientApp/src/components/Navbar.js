import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

const Navbar = ({ toggle }) => {
  const loggedUser = useSelector((store) => store.loggedUser);

  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to={"/"} className="pl-8">
        GBshop
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link to={"/"} className="p-4">
          Home
        </Link>
        <Link to={"/shop"} className="p-4">
          Shop
        </Link>
        <Link to={"/aboutus"} className="p-4">
          About us
        </Link>
        <Link to={"/contact"} className="p-4">
          Contact
        </Link>
        <Link to={"/addNewCd"} className="p-4">
          NewCd
        </Link>
        {loggedUser[0] ? null : (
          <Link
            className="border border-gray-200 px-4 py-2 hover:bg-yellow-500 transition rounded-2xl"
            to={"/login"}
          >
            Login
          </Link>
        )}
        {loggedUser[0] ? (
          <Link to={"/cart"} className="p-4">
            Cart
          </Link>
        ) : null}
        {loggedUser[0] ? <LogoutButton /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
