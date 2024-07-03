import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(10); // default quantity as shown in the image

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    product.quantity = quantity;
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="py-4 flex flex-col items-center gap-3">
      <div className="flex flex-row w-full">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-24 w-24 rounded mr-4"
        />
        <div className="flex flex-col text-left">
          <h2 className="text-[16px] text-[#053536] font-bold">{product.name}</h2>
          <p className="text-[12px] text-[#485D5E]">{`Base Color: ${product.color}`}</p>
          <p className="text-[12px] text-[#485D5E]">{`Size: ${product.size}`}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center">
          <button
            className="bg-[#fbf7f2] w-8 h-8 rounded text-black mr-2"
            onClick={() => handleQuantityChange(-1)}
          >
            –
          </button>
          <span className="w-6">{quantity}</span>
          <button
            className="bg-white w-8 h-8 rounded text-black ml-2"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <div className="ml-4 flex flex-row gap-3">
          <p className="text-[16px] text-[#485D5E]">{`$${product.price} x ${quantity}`}</p>
          <p className="text-[16px] text-[#053536] font-bold">{`$${totalPrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
