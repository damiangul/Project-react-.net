import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

export default function Dropdown({ isOpen, toggle }) {
  const loggedUser = useSelector((store) => store.loggedUser);

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
      {loggedUser ? null : (
        <Link to={"/login"} className="p-4">
          Login
        </Link>
      )}
      {loggedUser ? (
        <Link to={"/cart"} className="p-4">
          Cart
        </Link>
      ) : null}
      {loggedUser ? <LogoutButton /> : null}
    </div>
  );
}
