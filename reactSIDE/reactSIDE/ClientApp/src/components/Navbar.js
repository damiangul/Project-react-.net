import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>GBshop</Link>
      <Link to={"/"}>Strona Główna</Link>
      <Link to={"/shop"}>Sklep</Link>
    </nav>
  );
};

export default Navbar;
