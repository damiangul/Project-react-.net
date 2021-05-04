import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../redux/cartActions";

export default function Cart() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store.loggedUser);
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

  return (
    <div>
      <p className="text-center text-red-800 text-5xl">
        TODO - NA STRONIE JUZ JEST ZAIMPLEMENTOWANY KOSZYK. TERAZ TYLKO WYPISAC
        I JEST ES
      </p>
    </div>
  );
}
