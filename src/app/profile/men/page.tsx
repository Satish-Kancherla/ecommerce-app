"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import UpdateProductModal from "./UpdateProductModal";
import Image from "next/image";

type MenItem = {
  id: string;
  category: string;
  name: string;
  new_price: string;
  old_price: string;
  description: string;
  imageUrl: string;
};

const MenList = () => {
  const [men, setMen] = useState<MenItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<MenItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMen = async () => {
      try {
        const res = await axios.get("/api/men/");
        setMen(res.data);
      } catch (error) {
        console.error("Error fetching men products", error);
      }
    };
    fetchMen();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/men/delete?id=${id}`);
      setMen(men.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleUpdate = (updatedProduct: MenItem) => {
    setMen(
      men.map((item) => (item.id === updatedProduct.id ? updatedProduct : item))
    );
  };

  const handleEdit = (product: MenItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (!Array.isArray(men) || men.length === 0) {
    return (
      <div className="mt-52 w-screen flex items-center justify-center">
        <div className="flex justify-center items-center animate-bounce gap-1 w-12 h-10">
          <div className="w-1/2 h-1/2 bg-blue-500 rounded-full"></div>
          <div className="w-1/2 h-1/2 bg-red-500 rounded-full  "></div>
          <div className="w-1/2 h-1/2 bg-green-500 rounded-full  "></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-10 mx-5">
      <Link href="/profile/men/create">
        <button className="bg-red-500 text-white p-2 rounded">
          Add Product
        </button>
      </Link>
      {men.map((item) => (
        <div
          key={item.id}
          className="p-3 flex items-end  border rounded-md shadow-md"
        >
          <div className="flex md:flex-row sm:flex-col  sm:space-y-4 md:space-x-4">
            <div onClick={() => handleEdit(item)} className="cursor-pointer">
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
                  <div className="flex gap-2">
                    <div className="mt-12  ">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white p-2 rounded outline-none"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="mt-12  ">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-blue-500 text-white px-4 py-2 rounded outline-none"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <UpdateProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default MenList;
