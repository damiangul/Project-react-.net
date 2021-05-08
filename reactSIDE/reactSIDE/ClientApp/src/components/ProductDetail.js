import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartActions";
import { useHistory } from "react-router-dom";

export default function ProductDetail({ match }) {
  const products = useSelector((store) => store.products);
  const loggedUser = useSelector((store) => store.loggedUser);
  const usersCartLoaded = useSelector((store) => store.cart); //Koszyk zalogowanego uczestnika
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedProduct = products.find(
    (product) => Number(match.params.id) === product.id
  );

  const handleAddToCart = () => {
    let alreadyBoughtID = -1;
    let quantity = 1;

    const cdExists = usersCartLoaded.filter((element) => {
      return (
        element.userID === loggedUser[1] &&
        element.type === 0 &&
        element.productID === selectedProduct.id
      );
    });

    if (cdExists.length !== 0) {
      alreadyBoughtID = cdExists[0].id;
      quantity = cdExists[0].quantity;
    }

    const boughtProduct = {
      userID: loggedUser[1],
      productID: selectedProduct.id,
      alreadyBoughtID,
      quantity,
    };

    dispatch(addToCart(boughtProduct));
    history.push("/");
  };

  return (
    <div className="bg-gray-100 h-imageTheWeeknd">
      <div className="md:text-2xl lg:flex lg:flex-col lg:p-2 lg:w-1/2 lg:mx-auto">
        <div className="sm:w-1/2 mx-auto lg:w-3/5">
          <img
            className="mx-auto"
            src={selectedProduct.foto}
            alt={selectedProduct.title}
          />
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
            {loggedUser[0] ? (
              <button
                onClick={handleAddToCart}
                className="absolute left-1/2 transform -translate-x-1/2 w-full sm:w-32 mt-6 mx-auto p-1 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none"
              >
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
