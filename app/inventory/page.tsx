import Sidebar from "../components/sidebar";

export default async function InvetoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/inventory" />
    </div>
  );
}
