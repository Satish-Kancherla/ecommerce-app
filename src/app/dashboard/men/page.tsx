import React from "react";
import All_Data from "./aac";
import Link from "next/link";

const Man = () => {
  return (
    <div className="flex flex-row p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {All_Data.map((images) => (
          <Link href={`/dashboard/men/${images.id}`} key={images.id}>
            <img src={images.image} alt="" className="w-full" />
            <p className="my-[6px]">{images.name}</p>
            <div className="flex gap-[20px]">
              <div className="text-[#374151] text-[18px] font-semibold">
                RS {images.new_price}
              </div>
              <div className="text-[#8c8c8c] text-[18px] font-semibold line-through">
                RS {images.old_price}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Man;

