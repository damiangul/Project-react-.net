import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function Dropdown({ isOpen, toggle }) {
  const loggedUser_1  = localStorage.getItem("id");
  const ifLogged = JSON.parse(loggedUser_1);

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
      {ifLogged === null && (
        <Link to={"/login"} className="p-4">
          Login
        </Link>
      )}
      {ifLogged !== null ? (
        <Link to={"/cart"} className="p-4">
          Cart
        </Link>
      ) : null}
      {ifLogged !== null ? <LogoutButton /> : null}
    </div>
  );
}
