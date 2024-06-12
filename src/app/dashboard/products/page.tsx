import React from "react";
import All_Data, { Product } from "../../../../public/aac";
import Link from "next/link";


const Products = () => {
  return (
    <div className="flex p-5">
      <div className="w-1/2 p-5">
        {All_Data.map((images) => (
          <Link href={`/products/${images.id}`} key={images.id}>
            <img alt={images.name} src={images.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Products;
