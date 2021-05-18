import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Dropdown from "./components/Dropdown";

import "./custom.css";

//COMPONENTS
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Login from "./components/Login";

//REDUX
import { useDispatch } from "react-redux";
import { loadProducts } from "./redux/productsLoadingActions";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import NewCd from "./components/NewCd";
import Register from "./components/Register";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  useEffect(() => {
    fetch("https://localhost:44304/api/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(loadProducts(data));
      });
  }, [dispatch]);

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/product/:id"
          render={(props) => <ProductDetail {...props} />}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/addNewCd" component={NewCd} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
