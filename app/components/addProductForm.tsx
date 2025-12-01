"use client";

import { createProduct } from "@/lib/actions/products";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddProductForm() {
  const router = useRouter();

  async function handleAction(formData: FormData) {
    const result = await createProduct(formData);

    if (result?.success) {
      toast.success("Product created!");

      // delay so the toast shows before redirect
      setTimeout(() => {
        router.push("/inventory");
      }, 700);
    } else {
      toast.error("Failed to create product!");
    }
  }

  return (
    <form className="space-y-6" action={handleAction}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium texxt-gray-700 mb-2"
        >
          Product Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
          placeholder="Enter Product name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium texxt-gray-700 mb-2"
          >
            Quantity *
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
            placeholder="0"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium texxt-gray-700 mb-2"
          >
            Price *
          </label>
          <input
            type="text"
            id="price"
            name="price"
            min="0"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
            placeholder="0.0"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="sku"
          className="block text-sm font-medium texxt-gray-700 mb-2"
        >
          SKU (optional)
        </label>
        <input
          type="text"
          id="sku"
          name="sku"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
          placeholder="Enter SKU"
        />
      </div>

      <div>
        <label
          htmlFor="lowStock"
          className="block text-sm font-medium texxt-gray-700 mb-2"
        >
          Low Stock (optional)
        </label>
        <input
          type="number"
          id="lowStock"
          name="lowStock"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
          placeholder="Enter low stock"
        />
      </div>

      <div className="flex gap-5">
        <button
          type="submit"
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 hover:cursor-pointer"
        >
          Add product
        </button>
        <Link
          href="/inventory"
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
