import { Link, useNavigate } from "@tanstack/react-router";
import { useTheme } from "../theme-provider";
import { Separator } from "../ui/separator";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import { sidebarItems } from "@/constants/index";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { makeRequest } from "@/lib/axios";
import { toast } from "sonner";
const DashboardSidebar = () => {
  const { theme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: () => {
      return makeRequest.post("/user/logout");
    },
    onError(error) {
      toast.error(error.message);
    },
    onSuccess(data) {
      logout();
      toast.success(data.data.message);
      navigate({
        to: "/sign-up",
      });
    },
  });
  return (
    <aside className="relative overflow-hidden hidden lg:flex h-screen w-1/6 border-r p-4 flex-col items-start">
      {/* logo */}
      <Link to="/">
        <img
          className="max-h-16"
          src={`${
            theme === "dark" ? "full-logo-dark.webp" : "full-logo-light.webp"
          }`}
          alt="trackkaro"
        />
      </Link>

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
        <button onClick={() => mutation.mutate()} className="sidebar-item">
          <LogOutIcon /> Logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
