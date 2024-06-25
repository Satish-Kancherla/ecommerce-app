"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

type Item = {
  id: string;
  category: string;
  name: string;
  new_price: string;
  old_price: string;
  description: string;
  imageUrl: string;
};

const List = () => {
  const [men, setMen] = useState<Item[]>([]);
  const [women, setWomen] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("/api/men/");
        setMen(res.data);
        const result = await axios.get("/api/women");
        setWomen(result.data);
      } catch (error) {
        console.error("Error fetching men products", error);
      }
    };
    fetchItems();
  }, []);

  if (!Array.isArray(men) || men.length === 0) {
    return (
      <div className="mt-52 w-screen flex items-center justify-center">
        <div className="flex justify-center items-center animate-spin gap-1 w-12 h-12">
          <div className="w-1/2 h-1/2 bg-red-500 rounded-full"></div>
          {/* <div className="w-1/2 h-1/2 bg-red-700 rounded-full  "></div> */}
          <div className="w-1/2 h-1/2 bg-yellow-500 rounded-full  "></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-10 mx-5">
      <div className="flex content-center justify-center text-4xl font-bold ">
        All Products
      </div>
      {men.map((item) => (
        <div
          key={item.id}
          className="p-3 flex items-end  border rounded-md shadow-md"
        >
          <div className="flex md:flex-row sm:flex-col  sm:space-y-4 md:space-x-4">
            <div className="cursor-pointer">
              <Image
                src={item?.imageUrl || ""}
                width="200"
                height="200"
                alt={item.name}
                className="rounded-lg m-2"
              />
            </div>
            <div className="flex flex-col  cursor-pointer">
              <div>
                <h2 className="text-xl font-bold mt-2">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-green-500 font-bold">
                    Rs.{item.new_price}
                  </span>
                  <span className="text-gray-500 line-through ml-4">
                    Rs.{item.old_price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {women.map((item) => (
        <div key={item.id} className="p-4 border rounded-md shadow-md flex">
          <div>
            <h2 className="text-xl font-bold mt-2">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="text-green-500 font-bold">
                  Rs.{item.new_price}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  Rs.{item.old_price}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;