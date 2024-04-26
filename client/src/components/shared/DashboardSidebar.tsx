import { Link } from "@tanstack/react-router";
import { useTheme } from "../theme-provider";
import { Separator } from "../ui/separator";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import { sidebarItems } from "@/constants/index";
const DashboardSidebar = () => {
  const { theme } = useTheme();
  return (
    <aside className="relative overflow-hidden hidden lg:flex h-screen w-1/6 border-r p-4 flex-col items-start">
      {/* logo */}
      <img
        className="max-h-16"
        src={`${
          theme === "dark" ? "full-logo-dark.webp" : "full-logo-light.webp"
        }`}
        alt="trackkaro"
      />

      {/* sidebar items */}
      <div className="flex flex-col items-start gap-2 w-full mt-6">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            activeProps={{
              style: {
                backgroundColor: "#ddd6fe",
                color: "#6d28d9",
              },
            }}
            className={`sidebar-item`}
          >
            {<item.icon />} {item.text}
          </Link>
        ))}
      </div>
      {/* settings and logout */}
      <div className="mt-auto right-2 flex flex-col items-start gap-2 w-full my-4">
        <Separator className="my-2" />
        <Link
          to="/settings"
          activeProps={{
            style: {
              backgroundColor: "#ddd6fe",
              color: "#6d28d9",
            },
          }}
          className={`sidebar-item`}
        >
          <SettingsIcon />
          Settings
        </Link>
        <button className="sidebar-item">
          <LogOutIcon /> Logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
