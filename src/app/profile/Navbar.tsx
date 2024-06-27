"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LogIn, LogOut, User } from "lucide-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LayoutDashboard } from 'lucide-react';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { name: "Home", href: "/profile" },
    { name: "Men", href: "/profile/men" },
    { name: "Women", href: "/profile/women" },
  ];

  return (
    <div className="flex justify-center mt-5 text-xl font-semibold">
      <div className=" ml-5 cursor-none">
        <img src="/social.png" alt="" className="w-12" />
      </div>
      <div className="mr-auto ml-1 text-3xl mt-1 cursor-none">
        <p>AMAZON</p>
      </div>
      <div className="flex justify-center gap-10 text-xl mt-2 font-semibold ">
       {navLinks.map((link) => {
          const isActive =
            link.name === "Home"
              ? pathname === link.href
              : pathname.startsWith(link.href);

          return (
            <Link
              className={isActive ? "font-bold mr-4 text-blue-600 focus:border-blue-600 focus:border-b-2" : " mr-4"}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
   
      <div
        onClick={handleClick}
        className="cursor-pointer mr-5 uppercase ml-auto h-9 w-9 m-1 text-lg bg-red-600 select-none flex items-center justify-center rounded-full text-white"
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
              <div className="uppercase h-6 w-6 text-xs bg-red-700 select-none flex items-center justify-center rounded-full text-white">
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
        <Link href="/dashboard"><MenuItem ><LayoutDashboard className="text-theme-text w-5 mr-2 cursor-pointer" />Dashboard</MenuItem></Link>
        {user ? (
           <Link href="/dashboard"><MenuItem onClick={logout}>
            <LogOut className=" w-5 mr-2 cursor-pointer" />
            Logout
          </MenuItem></Link>
        ) : (
          <div>
            <Link href="/login">
              <MenuItem>
                <LogIn className=" w-5 mr-2 cursor-pointer" />
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
