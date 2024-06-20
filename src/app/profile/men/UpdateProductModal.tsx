import { useState, useEffect } from "react";
import axios from "axios";

type MenItem = {
  id: string;
  category: string;
  name: string;
  new_price: string;
  old_price: string;
  description: string;
  imageUrl: string;
};

type UpdateProductModalProps = {
  product: MenItem;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedProduct: MenItem) => void;
};

const UpdateProductModal = ({
  product,
  isOpen,
  onClose,
  onUpdate,
}: UpdateProductModalProps) => {
  const [updatedProduct, setUpdatedProduct] = useState<MenItem>(product);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    setUpdatedProduct(product);
    setSelectedFile(null); // Reset the selected file when the product changes
    setPreviewUrl(product.imageUrl); // Reset the preview URL when the product changes
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("id", updatedProduct.id);
      formData.append("category", updatedProduct.category);
      formData.append("name", updatedProduct.name);
      formData.append("new_price", updatedProduct.new_price);
      formData.append("old_price", updatedProduct.old_price);
      formData.append("description", updatedProduct.description);
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const res = await axios.put(`/api/men/update?id=${updatedProduct.id}`, formData);
      if (res.status === 200) {
        onUpdate(updatedProduct);
        onClose();
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Update Product</h2>
        <div className="space-y-4">
          <input
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
          <input
            name="new_price"
            value={updatedProduct.new_price}
            onChange={handleChange}
            placeholder="New Price"
            className="w-full p-2 border rounded"
          />
          <input
            name="old_price"
            value={updatedProduct.old_price}
            onChange={handleChange}
            placeholder="Old Price"
            className="w-full p-2 border rounded"
          />
          <input
            name="category"
            value={updatedProduct.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-2 border rounded"
          />
           {previewUrl && (
            <div className="mt-2">
              <img src={previewUrl} alt="Preview" className="h-40 w-40 object-cover rounded-md" />
            </div>
          )}
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
            className="mt-1 block w-6/12 shadow-sm sm:text-sm border-gray-300 rounded-md border-2"
          />
         
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
