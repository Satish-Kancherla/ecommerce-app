import React from "react";
import Navbar from "./Navbar";
import ShopContextProvider from "../context/ShopContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShopContextProvider>
      <Navbar />
      {children}
    </ShopContextProvider>
  );
}
