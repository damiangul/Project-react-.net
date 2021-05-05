import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../redux/cartActions";

export default function Cart() {
  const dispatch = useDispatch();
  let totalPrice = 0;
  const loggedUser = useSelector((store) => store.loggedUser);
  const products = useSelector((store) => store.products);
  const usersCartLoaded = useSelector((store) => store.cart); //Koszyk zalogowanego uczestnika

  useEffect(() => {
    fetch("https://localhost:44304/api/items/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const usersCart = data.filter((element) => {
          return element.userID === loggedUser[1];
        });
        dispatch(loadCart(usersCart));
      });
  }, [loggedUser, dispatch]);

  const cartProducts = usersCartLoaded.filter((element) => element.type === 0);
  const boughtProducts = usersCartLoaded.filter(
    (element) => element.type === 1
  );
  console.log(cartProducts, boughtProducts);

  const cartElements = cartProducts.map((cartElement) => {
    const product = products.find(
      (product) => product.id === cartElement.productID
    );

    totalPrice = totalPrice + cartElement.quantity * product.price;

    return (
      <div className="flex flex-col text-xs text-center sm:text-2xl lg:flex-row 2xl:text-2xl my-5">
        <div className="lg:w-1/3 mx-auto">
          <img src={product.foto} alt={product.title} />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-2/3 ">
          <p className="my-2">
            {product.title} - {product.author}
          </p>
          <div className="flex m-2">
            <svg
              className="w-7 h-7 p-1 mr-2 bg-yellow-400 rounded-full sm:w-9 sm:h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
            <p>{cartElement.quantity}</p>
            <svg
              className="w-7 h-7 p-1 ml-2 bg-yellow-400 rounded-full sm:w-9 sm:h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <p className="mb-2">Price: {cartElement.quantity * product.price}$</p>
        </div>
      </div>
    );
  });

  const boughtElements = boughtProducts.map((boughtElement) => {
    const product = products.find(
      (product) => product.id === boughtElement.productID
    );

    return (
      <div className="flex flex-col text-xs text-center sm:text-2xl lg:flex-row 2xl:text-2xl my-5">
        <div className="lg:w-1/3 mx-auto">
          <img src={product.foto} alt={product.title} />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-2/3 ">
          <p className="my-2">
            {product.title} - {product.author}
          </p>
          <p className="mb-2">
            Price: {boughtElement.quantity * product.price}$
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="w-2/3 mx-auto lg:w-4/5 2xl:w-1/2 border shadow-lg p-7 mt-4">
        <h2 className="text-center mb-4 uppercase font-bold">Cart</h2>
        {cartElements}
        <button className="p-2 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none">
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
