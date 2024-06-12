"use client"
import React from 'react';
import { ShopContextType, useShopContext } from '../ShopContext';

const CartItems = () => {
    
    const { getTotalCartAmount, All_Data, cartItem, removeFromCart } = useShopContext() as ShopContextType;

    return (
        <div className="cartitems mx-32 my-12">
            <div className="cartitems-main grid grid-cols-6 items-center py-5 text-gray-700 text-lg font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-1 bg-gray-200 border-0" />
            {All_Data.map(({ id, name, new_price, image }) => {
                if (cartItem[id] > 0) {
                    const totalPrice = Number(new_price) * cartItem[id];
                    return (
                        <div key={id}>
                            <div className="cartitems-format cartitems-main grid grid-cols-6 items-center py-5 text-gray-700 text-lg font-semibold">
                                <img className="cart_icon w-24" src={image} alt="" />
                                <p>{name}</p>
                                <p>Rs {new_price}</p>
                                <button className="cartitems-quantity w-16 h-12 border-2 border-gray-200 bg-white">
                                    {cartItem[id]}
                                </button>
                                <p>Rs {totalPrice}</p>
                                <img
                                    className="remove_icon w-6 mx-10 cursor-pointer"
                                    src="/x.png"
                                    onClick={() => {
                                        removeFromCart(id);
                                    }}
                                    alt=""
                                />
                            </div>
                            <hr className="h-1 bg-gray-200 border-0" />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down flex my-24">
                <div className="cartitems-total flex-1 flex flex-col gap-10">
                    <h1 className="text-3xl">Cart Total</h1>
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>Rs {getTotalCartAmount()}</p>
                    </div>
                    <hr className="h-1 bg-gray-200 border-0" />
                    <div className="flex justify-between">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr className="h-1 bg-gray-200 border-0" />
                    <div className="flex justify-between">
                        <h3 className="text-xl">Total</h3>
                        <h3 className="text-xl">Rs {getTotalCartAmount()}</h3>
                    </div>
                    <button className="w-64 h-12 outline-none border-none cursor-pointer bg-red-500 text-white text-lg font-semibold">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
