import { BarChart2 } from "lucide-react";
import Link from "next/link";
import { navigation } from "../data/navigation";
import { UserButton } from "@stackframe/stack";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  return (
    <div className="fixed left-0 top-0 bg-gray-900 text-white w-64 min-h-screen p-6 z-10">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart2 className="w-5 h-5" />
          <span className="text-lg font-semibold">Invetory App</span>
        </div>
      </div>
      <nav className="space-y-1">
        <div className="text-sm font-semibold text-gray-400">Inventory</div>

        {navigation.map((item, key) => {
          const IconComponent = item.icon;
          const isActive = currentPath == item.href;

          return (
            <Link
              href={item.href}
              key={key}
              className={`flex items-center space-x-3 py-2 px-2 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-gray-800"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
        <div className="flexx items-center justify-between">
          <UserButton showUserInfo />
        </div>
      </div>
    </div>
  );
}
