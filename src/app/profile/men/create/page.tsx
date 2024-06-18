"use client";
import axios from "axios";
import { useState } from "react";

const AddMen = () => {
  const [form, setForm] = useState({
    category: "",
    name: "",
    new_price: "",
    old_price: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/men/create', form);
      console.log("Success", res.data);
      alert("Men item created successfully!");
      setForm({
        category: "",
        name: "",
        new_price: "",
        old_price: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating men item", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 m-10">
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          value={form.category}
          onChange={handleChange}
          className="mt-1 block h-8 w-6/12 shadow-sm sm:text-sm border-gray-300 rounded-md border-2"
          required
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-6/12 shadow-sm sm:text-sm border-gray-300 rounded-md border-2 h-8"
          required
        />
      </div>
      <div>
        <label htmlFor="new_price" className="block text-sm font-medium text-gray-700">
          New Price
        </label>
        <input
          type="text"
          name="new_price"
          id="new_price"
          value={form.new_price}
          onChange={handleChange}
          className="mt-1 block w-6/12 shadow-sm sm:text-sm border-gray-300 rounded-md border-2 h-8"
          required
        />
      </div>
      <div>
        <label htmlFor="old_price" className="block text-sm font-medium text-gray-700">
          Old Price
        </label>
        <input
          type="text"
          name="old_price"
          id="old_price"
          value={form.old_price}
          onChange={handleChange}
          className="mt-1 block w-6/12 shadow-sm sm:text-sm border-gray-300 rounded-md border-2 h-8"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={form.description}
          onChange={handleChange}
          className="mt-1 block w-6/12 shadow-sm sm:text-sm border-gray-300 rounded-md border-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-40 outline-none">
        Add Men
      </button>
    </form>
  );
};

export default AddMen;
