"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ShopContextType, useShopContext } from "../context/ShopContext";
import { useAuth } from "../context/AuthContext";
import { LogIn, LogOut, User } from "lucide-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { getTotalCartItems } = useShopContext() as ShopContextType;
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pathname = usePathname();
  // const isActive = pathname.startsWith(href);

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
          // className="isActive :text-red-600 border-red-600 : text-black "
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
      {/* <div className=" ml-auto mr-5 mt-2">
        {user ? (
          <button
            className="w-20 p-1 text-center border-x-2 -mt-1 border-red-500 rounded-3xl text-slate-700 text-[16px] font-medium bg-white cursor-pointer"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="w-20 p-2 text-center border-x-2 border-green-500 rounded-3xl text-slate-700 text-[18px] font-medium bg-white cursor-pointer"
          >
            Login
          </Link>
        )}
      </div> */}
      <div className="flex items-center ml-auto -mt-5 mr-5 ">
        <Link href="/dashboard/cart">
          <img className="w-8" src="/shopping-cart.png" alt="" />
          <div className="h-[17px] w-[17px] bg-red-500 text-white text-xs flex justify-center -mt-[37px] ml-6 rounded-lg">
            {getTotalCartItems()}
          </div>
        </Link>
      </div>
      <div
        onClick={handleClick}
        className="cursor-pointer mr-5 uppercase h-9 w-9 m-1 text-lg bg-blue-700 select-none flex items-center justify-center rounded-full text-white"
      >
        {user ? (
          user.email.split(" ").map((str: string, i: number) => i < 2 && str[0])
        ) : (
          <div>
            <User />
          </div>
        )}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="flex w-full items-center px-2 ">
          {user && user ? (
            <div className="flex w-full items-center ">
              <div className="uppercase h-6 w-6 text-xs bg-slate-900 select-none flex items-center justify-center rounded-full text-white">
                {user &&
                  user.email
                    .split(" ")
                    .map((str: string, i: number) => i < 2 && str[0])}
              </div>
              <div className="mx-2 max-w-24 truncate capitalize text-slate-900 font-semibold text-lg">
                {user.email}
              </div>
            </div>
          ) : (
            <div className=" flex gap-1 mx-2 max-w-24 truncate capitalize text-slate-900 font-semibold text-lg">
              <div className="">
                <img src="/social.png" alt="" className="w-10 mt-1 " />
              </div>
              <div>Amazon</div>
            </div>
          )}
        </div>
        <hr className="my-2" />     
        {user?.isAdmin && (
          <MenuItem>
            <Link href="/profile" className="flex">
              <User className="w-5 mr-2 cursor-pointer" />
              Profile
            </Link>
          </MenuItem>
        )}
         {user ? (
          <Link href="/dashboard">
            <MenuItem onClick={logout}>
              <LogOut className="text-theme-text w-5 mr-2 cursor-pointer" />
              Logout
            </MenuItem>
          </Link>
        ) : (
          <div>
            <Link href="/login">
              <MenuItem>
                <LogIn className="text-theme-text w-5 mr-2 cursor-pointer" />
                Login
              </MenuItem>
            </Link>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
