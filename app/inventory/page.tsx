import { prisma } from "@/lib/prisma";
import Sidebar from "../components/sidebar";
import getCurrentUser from "@/lib/auth";
import { deleteProduct } from "@/lib/actions/products";
import DeleteButton from "../components/deleteButton";

export default async function InvetoryPage() {
  const user = await getCurrentUser();
  const userId = user.id;

  const totalProducts = await prisma.product.findMany({ where: { userId } });
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/inventory" />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl texxt-semibold text-gray-900">
                Inventory
              </h1>
              <p className="text-sm text-gray-500">
                Manage your products and track them
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                    SKU
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                    Stock At
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {totalProducts.map((product, key) => (
                  <tr key={key}>
                    <td className="px-6 py-4  text-sm font-medium text-gray-500 ">
                      {product.name}
                    </td>
                    <td className="px-6 py-4  text-sm font-medium text-gray-500 ">
                      {product.sku || "-"}
                    </td>
                    <td className="px-6 py-4  text-sm font-medium text-gray-900 ">
                      {Number(product.price).toFixed(2)}
                    </td>
                    <td className="px-6 py-4  text-sm font-medium text-gray-900 ">
                      {product.quantity}
                    </td>
                    <td className="px-6 py-4  text-sm font-medium text-gray-500 ">
                      {product.lowStock || "-"}
                    </td>
                    <td className="px-6 py-4  text-sm font-medium text-gray-500 ">
                      <DeleteButton id={product.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
