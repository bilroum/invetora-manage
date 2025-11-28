"use server";
import { prisma } from "@/lib/prisma";
import Sidebar from "../components/sidebar";
import getCurrentUser from "@/lib/auth";
import DeleteButton from "../components/deleteButton";

export default async function InvetoryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const user = await getCurrentUser();
  const userId = user.id;

  const params = await searchParams;
  const q = (params.q ?? "").trim();

  const totalProducts = await prisma.product.findMany({
    where: { userId, name: { contains: q, mode: "insensitive" } },
  });

  console.log(totalProducts);
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
          {/* search products */}
          <div className="bg-white rounded-lg  p-0">
            <form className="flex gap-2" action="/inventory" method="GET">
              <input
                type="text"
                placeholder="Search products..."
                name="q"
                className="flex-1 px-4 py-2 border bg-white border-gray-300 rounded-lg focus:border-transparent"
              />
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Search
              </button>
            </form>
          </div>

          {totalProducts.length == 0 ? (
            <p className="px-2 py-4  text-lg font-semibold text-gray-700 ">
              No such products found!
            </p>
          ) : (
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
          )}
        </div>
      </main>
    </div>
  );
}
