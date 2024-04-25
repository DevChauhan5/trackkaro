import {
  AreaChartIcon,
  BadgeIndianRupeeIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  SettingsIcon,
  WalletIcon,
} from "lucide-react";

export const sidebarItems = [
  {
    to: "/dashboard",
    icon: LayoutDashboardIcon,
    text: "Dashboard",
  },
  {
    to: "/transactions",
    icon: BadgeIndianRupeeIcon,
    text: "Transactions",
  },
  {
    to: "/budget",
    icon: WalletIcon,
    text: "Budget",
  },
  {
    to: "/analytics",
    icon: AreaChartIcon,
    text: "Analytics",
  },
];
