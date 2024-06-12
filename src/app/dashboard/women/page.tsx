"use client"
import React, { useState } from "react";
import Link from "next/link";
import All_Data, { Product } from '../../../../public/aac';
import Offers from "@/app/components/Offers";

const Women= () => {
  const womenProducts = All_Data.filter((product) => product.category === "Women");

  const [visibleCount, setVisibleCount] = useState(10);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 10); 
  };

  const displayedProducts = womenProducts.slice(0, visibleCount);
  const totalProducts = womenProducts.length;

  return (
    <div className="p-5">
      <Offers />
      <div className="mb-4 text-lg">
      <p>Showing <b>{displayedProducts.length}</b> out of <b>{totalProducts}</b> products</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {displayedProducts.map((images) => (
          <Link href={`/dashboard/women/${images.id}`} key={images.id}>
            <div>
              <img src={images.image} alt={images.name} className="w-full" />
              <p className="my-[6px]">{images.name}</p>
              <div className="flex gap-[20px]">
                <div className="text-[#374151] text-[18px] font-semibold">
                  RS {images.new_price}
                </div>
                <div className="text-[#8c8c8c] text-[18px] font-semibold line-through">
                  RS {images.old_price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleCount < totalProducts && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreProducts}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Women;
