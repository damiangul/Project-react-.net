import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Shop() {
  // W tym api jest id, title, author, dataWydania, genre, price, foto i title.
  const products = useSelector((store) => store.products);

  const loggedUser = useSelector((store) => store.loggedUser);
  console.log(loggedUser);
  //IMPLMENTACJA PRZY WIEKSZEJ ILOSCI PLYT
  const [showFrom, setShowFrom] = useState(0);
  const [showTo, setShowTo] = useState(4);

  const productsOnSite = products.map((product) => (
    <div
      key={product.id}
      className="flex flex-row p-4 mx-5 my-2 border border-yellow-600 rounded lg:w-2/5 bg-white"
    >
      <div className="w-1/2">
        <img className="object-cover" src={product.foto} alt={product.title} />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 font-mono md:text-3xl lg:text-xl">
        <p className="text-center">"{product.title}"</p>
        <p>{product.author}</p>
        <p>{product.genre}</p>
        <Link
          to={`/product/${product.id}`}
          className="px-2 py-1 mt-2 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none"
        >
          Buy now for {product.price}$
        </Link>
      </div>
    </div>
  ));

  // JAK BEDZIE WIECEJ PLYT NA STRONIE TO SIE DODA TO
  const nextPage = () => {
    const productsLength = productsOnSite.length;

    if (showTo < productsLength) {
      setShowFrom(showFrom + 4);
    }

    if (showTo + 4 > productsLength) {
      setShowTo(showTo + (productsLength - showTo));
    } else {
      setShowTo(showTo + 4);
    }
  };

  const previousPage = () => {
    if (showFrom - 4 >= 0) {
      setShowFrom(showFrom - 4);
    }

    if (showFrom > 0) {
      setShowTo(showTo - 4);
    }
  };

  return (
    <div className="bg-background-ballons">
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around lg:items-center py-20">
        {productsOnSite.slice(showFrom, showTo)}
      </div>
      <div className="flex flex-row justify-around pb-12 w-1/4 mx-auto">
        <button
          onClick={previousPage}
          className="bg-yellow-500 p-4 rounded-full focus:outline-none"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextPage}
          className="bg-yellow-500 p-4 rounded-full focus:outline-none"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <Footer />
    </div>
  );
}
