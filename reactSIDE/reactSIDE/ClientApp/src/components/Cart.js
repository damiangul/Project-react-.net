import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCart } from "../redux/cartActions";
import { useHistory } from "react-router-dom";
import CartElements from "./CartElements";
import BoughCartElements from "./BoughCartElements";

export default function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();
  let totalPrice = 0;
  const [totalPriceState, setTotalPriceState] = useState(0);
  const products = useSelector((store) => store.products);
  const usersCartLoaded = useSelector((store) => store.cart); //Koszyk zalogowanego uczestnika
  const loggedUser_1 = localStorage.getItem("id");
  const ifLogged = JSON.parse(loggedUser_1);
  //Loading current cart for user
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://localhost:44304/api/items/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const usersCart = data.filter((element) => {
            return element.userID === ifLogged.id;
          });
          dispatch(loadCart(usersCart));
        });
    };

    fetchData();
  }, [dispatch, ifLogged, totalPrice]);

  //Selecting cart products and bought products
  const cartProducts = usersCartLoaded.filter((element) => element.type === 0);
  const boughtProducts = usersCartLoaded.filter(
    (element) => element.type === 1
  );

  //Function for handling amount of CD that are in the cart
  const handleAmountChange = (id, quantity) => {
    let newPrice = 0;

    cartProducts.forEach((element) => {
      const product = products.find(
        (product) => product.id === element.productID
      );

      if (element.id === id) {
        element.quantity = quantity;

        const requestOptions = {
          method: "PATCH",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify([
            {
              op: "replace",
              path: "/quantity",
              value: quantity,
            },
          ]),
        };

        fetch(
          `https://localhost:44304/api/items/${element.id}`,
          requestOptions
        ).then((response) => response.json());
      }

      newPrice = newPrice + element.quantity * product.price;
    });

    setTotalPriceState(newPrice);
  };

  //Cart elements components
  const cartElements = cartProducts.map((cartElement) => {
    const product = products.find(
      (product) => product.id === cartElement.productID
    );

    totalPrice = totalPrice + cartElement.quantity * product.price;

    return (
      <CartElements
        key={cartElement.id}
        product={product}
        cartElement={cartElement}
        handleAmountChange={handleAmountChange}
      />
    );
  });

  //Bought elements components
  const boughtElements = boughtProducts.map((boughtElement) => {
    const product = products.find(
      (product) => product.id === boughtElement.productID
    );

    return (
      <BoughCartElements
        key={boughtElement.id}
        product={product}
        boughtElement={boughtElement}
      />
    );
  });
  boughtElements.reverse();

  //Handle buy button
  const handleBuy = () => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify([
        {
          op: "replace",
          path: "/type",
          value: 1,
        },
      ]),
    };

    cartProducts.forEach((element) => {
      fetch(
        `https://localhost:44304/api/items/${element.id}`,
        requestOptions
      ).then((response) => response.json());
    });

    history.push("/");
  };

  return (
    <div>
      <div className="w-2/3 mx-auto lg:w-4/5 2xl:w-1/2 border shadow-lg p-7 mt-4">
        <h2 className="text-center mb-4 uppercase font-bold">Cart</h2>
        {cartElements}
        <button
          onClick={handleBuy}
          className="p-2 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none"
        >
          Buy now for {totalPrice}
        </button>
      </div>
      <div className="w-2/3 mx-auto lg:w-4/5 2xl:w-1/2 border shadow-lg p-7 mt-4">
        <h2 className="text-center mb-4 uppercase font-bold">Bought</h2>
        {boughtElements}
      </div>
    </div>
  );
}
