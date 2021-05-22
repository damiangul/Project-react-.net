import React from "react";

export default function BoughCartElements({ product, boughtElement }) {
  return (
    <div className="flex flex-col text-xs text-center sm:text-2xl lg:flex-row 2xl:text-2xl my-5">
      <div className="lg:w-1/3 mx-auto">
        <img src={product.foto} alt={product.title} />
      </div>
      <div className="flex flex-col justify-center items-center lg:w-2/3 ">
        <p className="my-2">
          {product.title} - {product.author}
        </p>
        <p className="mb-2">Price: {boughtElement.quantity * product.price}$</p>
      </div>
    </div>
  );
}
