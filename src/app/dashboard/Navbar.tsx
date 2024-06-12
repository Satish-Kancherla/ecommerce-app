"use client";
import Link from "next/link";
import React from "react";
import { ShopContextType, useShopContext } from "./ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useShopContext() as ShopContextType;
  // const pathname = usePathname();
  // const navItems = [
  //   { name: "Home", path: "/dashboard" },
  //   { name: "Men", path: "/dashboard/men" },
  //   { name: "Women", path: "/dashboard/women" },
  // ];

  return (
    <div className="flex justify-center mt-5 text-xl font-semibold">
      <div className=" ml-5 ">
        <img src="/social.png" alt="" className="w-12" />
      </div>
      <div className="mr-auto ml-5 text-3xl mt-1">
        <p>AMAZON</p>
      </div>
      <div className="flex justify-center gap-10 text-xl mt-2 font-semibold ">
        <Link
          className="focus:border-b-2 focus:text-red-600  focus:font-bold focus:border-red-600"
          // focus:border-b-2 focus:text-red-600  focus:font-bold focus:border-slate-900
          href={"/dashboard"}
        >
          Home
        </Link>
        <Link
          className="focus:border-b-2 focus:text-red-600  focus:font-bold focus:border-red-600 "
          href={"/dashboard/men"}
        >
          Men
        </Link>
        <Link
          className="focus:border-b-2 focus:text-red-600  focus:font-bold focus:border-red-600"
          href={"/dashboard/women"}
        >
          Women
        </Link>
      </div>
      <div className=" ml-auto mr-5 mt-2">
        <Link href="/login" className="w-20 p-2 text-center border-x-2 border-slate-500 rounded-3xl text-slate-400 text-[18px] font-medium bg-white cursor-pointer">Login</Link>
      </div>
      <div className="flex items-center -mt-5 mr-5 ">
        <Link href="/dashboard/cart">
          <img className="w-8" src="/shopping-cart.png" alt="" />
          <div className="h-[17px] w-[17px] bg-red-500 text-white text-xs flex justify-center -mt-[37px] ml-6 rounded-lg">
            {getTotalCartItems()}
          </div>
        </Link>
      </div>
    </div>
  );
};

//     <nav className=" p-4">
//       <ul className="flex space-x-4 justify-center">
//         <div className="flex justify-start">
//           <img src="" alt="" />
//           <p>AMAZON</p>
//         </div>
//         {navItems.map((item) => (
//           <li key={item.path}>
//             <Link legacyBehavior href={item.path}>
//               <a
//                 className={` text-xl ${
//                   pathname === item.path ? "border-b-2 text-slate-900  font-bold border-red-500 border-solid" : "font-medium"
//                 }`}
//               >
//                 {item.name}
//               </a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

export default Navbar;
