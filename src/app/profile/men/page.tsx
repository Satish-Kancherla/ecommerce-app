"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import UpdateProductModal from "./UpdateProductModal";

type MenItem = {
  id: string;
  category: string;
  name: string;
  new_price: string;
  old_price: string;
  description: string;
};

const MenList = () => {
  const [men, setMen] = useState<MenItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<MenItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMen = async () => {
      try {
        const res = await axios.get('/api/men');
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
      setMen(men.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleUpdate = (updatedProduct: MenItem) => {
    setMen(men.map(item => (item.id === updatedProduct.id ? updatedProduct : item)));
  };

  const handleEdit = (product: MenItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (!Array.isArray(men) || men.length === 0) {
    return <div className="mt-52 text-center">Loading...</div>;
  }

  return (
    <div className="space-y-4 mt-10 mx-5">
      <Link href="/profile/men/create">
        <button className="bg-red-500 text-white p-2 rounded">Add Product</button>
      </Link>
      {men.map(item => (
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

export default MenList;
