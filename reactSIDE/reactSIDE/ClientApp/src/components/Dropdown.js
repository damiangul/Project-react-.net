import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-400"
          : "hidden"
      }
      onClick={toggle}
    >
      {" "}
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
      <Link to={"/login"} className="p-4">
        Login
      </Link>
    </div>
  );
}
