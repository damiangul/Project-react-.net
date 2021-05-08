import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newCd } from "../redux/newCdActions";

export default function NewCd() {
  const newCdAdd = useSelector((store) => store.newCdAdd);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [dataWydania, setDataWydania] = useState("");
  const [foto, setFoto] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cdAdded, setCdAdded] = useState(false);

  const authorOnChange = (e) => {
    setAuthor(e.target.value);
  };

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const genreOnChange = (e) => {
    setGenre(e.target.value);
  };

  const dataWydaniaOnChange = (e) => {
    setDataWydania(e.target.value);
  };

  const fotoOnChange = (e) => {
    setFoto(e.target.value);
  };

  const priceOnChange = (e) => {
    setPrice(e.target.value);
  };

  const quantityOnChange = (e) => {
    setQuantity(e.target.value);
  };

  const addNewCd = (e) => {
    e.preventDefault();
    dispatch(newCd(title, author, genre, dataWydania, foto, price, quantity));
    setCdAdded(true);
  };

  useEffect(() => {
    if (cdAdded) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          title: newCdAdd[0],
          author: newCdAdd[1],
          genre: newCdAdd[2],
          dataWydania: newCdAdd[3],
          foto: newCdAdd[4],
          price: newCdAdd[5],
          quantity: newCdAdd[6],
        }),
      };
      fetch(
        "https://localhost:44304/api/products/",
        requestOptions
      ).then((response) => response.json());
    }
  }, [cdAdded]);

  return (
    <div className="bg-background-ballons h-imageTheWeeknd">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 border w-3/4 rounded-3xl md:w-1/2 xl:w-1/4 bg-white">
        <h2 className="text-center font-mono h-1/3 flex justify-center items-center text-2xl">
          {cdAdded ? <h2>New cd added</h2> : <h2>Add new cd</h2>}
        </h2>

        <form className="flex flex-col w-4/5 mx-auto mb-16 h-2/4 justify-around">
          <input
            placeholder="Title"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="title"
            value={title}
            onChange={titleOnChange}
          />
          <input
            placeholder="Author"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="author"
            value={author}
            onChange={authorOnChange}
          />

          <input
            placeholder="Genre"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="genre"
            value={genre}
            onChange={genreOnChange}
          />
          <input
            placeholder="DataWydania"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="dataWydania"
            value={dataWydania}
            onChange={dataWydaniaOnChange}
          />

          <input
            placeholder="Foto"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="foto"
            value={foto}
            onChange={fotoOnChange}
          />
          <input
            placeholder="Price"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="price"
            value={price}
            onChange={priceOnChange}
          />
          <input
            placeholder="Quantity"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="quantity"
            value={quantity}
            onChange={quantityOnChange}
          />

          <button
            className="w-full md:w-32 mx-auto p-1 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none"
            onClick={addNewCd}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
