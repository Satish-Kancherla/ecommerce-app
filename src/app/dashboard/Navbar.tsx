import Link from "next/link";
import React from "react";

const Navbar = () => {

  return (
    <div>
      <div className="flex justify-center gap-10 mt-5 text-xl font-semibold ">
      <Link className="hover:bg-sky-700 " href={"/dashboard"}>Home</Link>
        <Link className="active:bg-violet-700 active:text-white" href={"/dashboard/men"}>Men</Link>
        <Link className="focus:bg-violet-700" href={"/dashboard/women"}>Women</Link>
      </div>
      <div className="flex justify-end -mt-8 mr-5 text-xl font-semibold">
        <p>Logout</p>
      </div>
    </div>

  );
};

export default Navbar;
