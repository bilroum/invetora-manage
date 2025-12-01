import Sidebar from "../components/sidebar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/inventory" />

      <main className="ml-64 p-8 space-y-6">
        {/* Header */}
        <div className="h-8 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />

        {/* Table Skeleton */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="w-full h-10 bg-gray-100" />

          <div className="divide-y divide-gray-200">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="grid grid-cols-6 gap-4 p-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
