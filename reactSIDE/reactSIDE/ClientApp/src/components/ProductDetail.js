import React from "react";
import { useSelector } from "react-redux";

export default function ProductDetail({ match }) {
  const products = useSelector((store) => store.products);
  const loggedUser = useSelector((store) => store.loggedUser);

  const selectedProduct = products.find(
    (product) => Number(match.params.id) === product.id
  );

  console.log(selectedProduct);

  return (
    <div className="bg-gray-100 h-imageTheWeeknd">
      <div className="md:text-2xl lg:flex lg:flex-col lg:p-2 lg:w-1/2 lg:mx-auto">
        <div className="sm:w-1/2 sm:mx-auto lg:w-3/5">
          <img src={selectedProduct.foto} alt={selectedProduct.title} />
        </div>
        <div>
          <div className="mt-6">
            <h2 className="text-center">
              Album <strong>{selectedProduct.title}</strong> is done by{" "}
              <strong>{selectedProduct.author}</strong>, only here for{" "}
              <strong>{selectedProduct.price}$</strong>
            </h2>
            <h3 className="mt-6 text-center">Genre: {selectedProduct.genre}</h3>
            <h3 className="text-center">Date: {selectedProduct.dataWydania}</h3>
          </div>
          <div className="relative">
            {loggedUser ? (
              <button className="absolute left-1/2 transform -translate-x-1/2 w-full sm:w-32 mt-6 mx-auto p-1 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none">
                Buy now
              </button>
            ) : (
              <p className="text-center text-yellow-500 mt-5">Login to buy</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
