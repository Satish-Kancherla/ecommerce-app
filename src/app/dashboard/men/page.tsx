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

// import Image from "next/image";
// import wondersImages, { WonderImage } from "../wonder";
// import Link from 'next/link';

// export default function PhotoPage({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
//   return (
//     <div className="container mx-auto my-10">
//       <div className="w-1/2 mx-auto">
//         <div>
//           <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
//         </div>
//         <Image
//           alt={photo.name}
//           src={photo.src}
//           className="w-full object-cover aspect-square "
//         />

//         <div className="bg-white py-4">
//           <h3>{photo.photographer}</h3>
//           <h3>{photo.location}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }
