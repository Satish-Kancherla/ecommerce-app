"use client"
import React, { useState } from "react";
import All_Data from "../../../../public/aac";
import Link from "next/link";
import Offers from "@/app/components/Offers";

const Man = () => {
 
  const menProducts = All_Data.filter(images => images.category === "Men");

  const [visibleCount, setVisibleCount] = useState(10);

  const showMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 10); 
  };

  const displayedProducts = menProducts.slice(0, visibleCount);
  const totalProducts = menProducts.length;

  return (
    <div className="p-5">
      <Offers />
      <div className="mb-4 text-base">
        Showing <b>{displayedProducts.length}</b> out of <b>{totalProducts}</b> products
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {displayedProducts.map(images => (
          <Link href={`/dashboard/men/${images.id}`} key={images.id}>
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

export default Man;
