import Sidebar from "../components/sidebar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />

      <main className="ml-64 p-8 space-y-8">
        {/* Header */}
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-72 bg-gray-200 rounded animate-pulse" />

        {/* Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4 animate-pulse">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded" />
            ))}
          </div>

          {/* Weekly Product Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
            <div className="h-48 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Stock & Efficiency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent stock */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-3 animate-pulse">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center h-8 bg-gray-200 rounded"
              />
            ))}
          </div>

          {/* Efficiency donut */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4 animate-pulse">
            <div className="h-48 w-48 mx-auto bg-gray-200 rounded-full" />
            <div className="h-4 w-32 bg-gray-200 rounded mx-auto" />
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-3/4 bg-gray-200 rounded mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
