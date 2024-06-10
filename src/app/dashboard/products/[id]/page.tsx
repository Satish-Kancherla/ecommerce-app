"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import All_Data ,{Product} from '../../men/aac';


const Products = () => {
    
    const { id } = useParams<{ id: string }>(); 

    const products: Product = All_Data.find((data) => data.id === id)!;
    // const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

    if (!products) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex p-5">
            <div className="w-1/2 p-5">
                <img
                    onClick={() => window.scrollTo(0, 0)}
                    src={products.image}
                    alt={products.name}
                    className="w-3/4"
                />
            </div>
            <div className="m-5">
                <div className="text-gray-800 text-4xl font-bold">
                    <h1>{products.name}</h1>
                </div>
                <div className="flex my-10 gap-8 text-2xl font-bold">
                    <div className="text-gray-500 line-through">RS {products.old_price}</div>
                    <div className="text-blue-500">RS {products.new_price}</div>
                </div>
                <div className="my-5">
                    <p>{products.description}</p>
                </div>
                <div className="mt-14 text-gray-600 text-xl font-semibold">
                    <h1>Select Size</h1>
                    <div className="flex my-7 gap-5">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div key={size} className="p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer">
                                {size}
                            </div>
                        ))}
                    </div>
                    <button
                        // onClick={() => addToCart(product.id)}
                        className="px-10 py-5 w-52 text-lg font-semibold text-white bg-red-500 mb-10 border-none cursor-pointer hover:bg-red-600 active:bg-blue-700"
                    >
                        ADD TO CART
                    </button>
                    <p className="mt-2">
                        <span className="font-semibold">Category: </span>{products.category}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Products;
