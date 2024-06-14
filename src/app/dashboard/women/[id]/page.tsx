"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import All_Data, { Product } from "../../../../../public/aac";
import { ShopContextType, useShopContext } from "../../../context/ShopContext";

const Women = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useShopContext() as ShopContextType;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const products: Product | undefined = All_Data.find((data) => data.id === id);

  if (!products) {
    return <div>Product not found</div>;
  }

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex p-3">
      <div className="w-1/2 p-5">
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={products.image}
          alt={products.name}
          className="w-3/4"
        />
      </div>
      <div className="m-5">
        <div className="text-gray-800 text-4xl font-bold">
          <h1>{products.name}</h1>
        </div>
        <div className="flex my-10 gap-8 text-2xl font-bold">
          <div className="text-gray-500 line-through">
            RS {products.old_price}
          </div>
          <div className="text-orange-500">RS {products.new_price}</div>
        </div>
        <div className="my-5">
          <p>{products.description}</p>
        </div>
        <div className="mt-10 text-gray-600 text-xl font-semibold">
          <h1>Select Size</h1>
          <div className="flex my-7 gap-5">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  className="hidden"
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                />
                <div
                  className={`p-4 border border-gray-300 rounded-full text-base ${
                    selectedSize === size
                      ? "text-red-500 border-red-500 border"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  {size}
                </div>
              </label>
            ))}
          </div>
          <button
            onClick={() => addToCart(products.id)}
            // className="px-10 py-4 w-52 text-lg font-semibold text-white bg-red-500 mb-10 rounded-lg cursor-pointer hover:bg-red-600 active:bg-blue-700"
            className="flex justify-center mb-10 items-center font-semibold w-[200px] h-[50px] rounded-lg bg-red-500 text-white text-lg"
          >
            ADD TO CART
          </button>
          <p className="mt-2">
            <span className="font-semibold">Category: </span>
            {products.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Women;
