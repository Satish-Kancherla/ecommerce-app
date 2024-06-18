"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import UpdateProductModal from "./UpdateProductModal";

type WomenItem = {
  id: string;
  category: string;
  name: string;
  new_price: string;
  old_price: string;
  description: string;
};

const WomenList = () => {
  const [women, setWomen] = useState<WomenItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<WomenItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchWomen = async () => {
      try {
        const res = await axios.get('/api/women');
        setWomen(res.data);
      } catch (error) {
        console.error("Error fetching women products", error);
      }
    };
    fetchWomen();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/women/delete?id=${id}`);
      setWomen(women.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleUpdate = (updatedProduct: WomenItem) => {
    setWomen(women.map(item => (item.id === updatedProduct.id ? updatedProduct : item)));
  };

  const handleEdit = (product: WomenItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (!Array.isArray(women) || women.length === 0) {
    return <div className="mt-32 text-center">Loading...</div>;
  }

  return (
    <div className="space-y-4 mt-10 mx-5">
      <Link href="/profile/women/create">
        <button className="bg-red-500 text-white p-2 rounded">Add Product</button>
      </Link>
      {women.map(item => (
        <div key={item.id} className="p-4 border rounded-md shadow-md flex">
          <div onClick={() => handleEdit(item)}>
            <h2 className="text-xl font-bold mt-2">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="text-green-500 font-bold">Rs.{item.new_price}</span>
                <span className="text-gray-500 line-through ml-2">Rs.{item.old_price}</span>
              </div>
            </div>
          </div>
          <div className="ml-auto mt-auto">
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white p-2 rounded outline-none"
            >
              Delete
            </button>
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

export default WomenList;
