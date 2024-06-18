"use client"
import React, { useState } from "react";
import All_Data from "../../../../public/aac";
import Link from "next/link";
import Offers from "@/app/components/Offers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Man = () => {
 
  const menProducts = All_Data.filter(images => images.category === "Men");

  const [visibleCount, setVisibleCount] = useState(10);
  const [sortOrder, setSortOrder] = useState<string | null>(null);


  const showMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 10); 
  };

  const sortedProducts = [...menProducts].sort((a, b) => {
    const priceA =
      typeof a.new_price === "string" ? parseFloat(a.new_price) : a.new_price;
    const priceB =
      typeof b.new_price === "string" ? parseFloat(b.new_price) : b.new_price;

    if (sortOrder === "Price: High To Low") {
      return priceB - priceA;
    }
    if (sortOrder === "Price: Low To High") {
      return priceA - priceB;
    }
    return 0;
  });

  const displayedProducts = sortedProducts.slice(0, visibleCount);
  const totalProducts = menProducts.length;

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  return (
    <div className="p-5">
      <Offers />
      <div className="flex justify-between text-center m-5">
        <div className="text-base mt-2">
          <p>
            Showing <b>{displayedProducts.length}</b> out of{" "}
            <b>{totalProducts}</b> products
          </p>
        </div>
        <div>
          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="w-[180px] outline-none">
              <SelectValue placeholder="Sort by" className="outline-none" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Recommended">Recommended</SelectItem>
              <SelectItem value="Price: High To Low">
                Price: High To Low
              </SelectItem>
              <SelectItem value="Price: Low To High">
                Price: Low To High
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {displayedProducts.map(images => (
          <Link href={`/dashboard/men/${images.id}`} key={images.id}>
            <div>
              <img src={images.image} alt={images.name} className="w-full" />
              <p className="my-[6px]">{images.name}</p>
              <div className="flex gap-[20px]">
                <div className="text-green-500 font-bold text-[18px]">
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
            // className="bg-blue-500 text-white py-2 px-4 rounded"
            className="flex justify-center items-center mt-5 font-medium w-[200px] h-[50px] rounded-full bg-blue-500 text-white text-lg"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Man;
