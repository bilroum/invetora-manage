"use client";

import { toast } from "sonner";
import { deleteProduct } from "@/lib/actions/products";

export default function DeleteButton({ id }: { id: string }) {
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id", id);

    const res = await deleteProduct(formData);

    if (res?.success) {
      toast.success("Product deleted successfully!");
    } else {
      toast.error("Could not delete item!");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800 hover:cursor-pointer"
    >
      Delete
    </button>
  );
}
