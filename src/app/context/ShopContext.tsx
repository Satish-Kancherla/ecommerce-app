"use client"
import React, { useState, createContext, ReactNode, useContext } from 'react';
import All_Data from '../../../public/aac';

export type Product = {
    id: number | string;
    category: string;
    image: string;
    type: string;
    name: string;
    model?: string;
    new_price: string | number;
    old_price: string | number;
    description: string;
};

export type ShopContextType = {
    getTotalCartAmount: () => number;
    getTotalCartItems: () => number;
    All_Data: Product[];
    cartItem: { [key: string]: number };
    addToCart: (itemId: string | number) => void;
    removeFromCart: (itemId: string | number) => void;
};

const ShopContext = createContext<ShopContextType | null>(null);

const getDefaultCart = () => {
    let cart: { [key: string]: number } = {};
    for (let index = 0; index < All_Data.length + 1; index++) {
        cart[index.toString()] = 0;
    }
    return cart;
};

type ShopContextProviderProps = {
    children: ReactNode;
};

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
    const [cartItem, setCartItem] = useState<{ [key: string]: number }>(getDefaultCart());

    const addToCart = (itemId: string | number) => {
        setCartItem((prev) => ({ ...cartItem, [itemId.toString()]: prev[itemId.toString()] + 1 }));
    };

    const removeFromCart = (itemId: string | number) => {
        setCartItem((prev) => ({ ...cartItem, [itemId.toString()]: prev[itemId.toString()] - 1 }));
    };

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItem) {
          if (cartItem[item] > 0) {
              let itemInfo = All_Data.find((product) => product.id === item);
              if (itemInfo) {
                  totalAmount += cartItem[item] * parseFloat(itemInfo.new_price.toString());
              }
          }
      }
      return  parseFloat(totalAmount.toFixed(2));
  };
        
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    };

    const contextValue: ShopContextType = {
        getTotalCartAmount,
        getTotalCartItems,
        All_Data,
        cartItem,
        addToCart,
        removeFromCart,
    };

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;

export const useShopContext =() =>{
  const context = useContext(ShopContext);

    if (!context) {
        return <div>Loading...</div>;
    }else{
      return context;
    }
}