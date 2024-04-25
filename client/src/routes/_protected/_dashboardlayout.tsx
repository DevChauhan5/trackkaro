import DashboardSidebar from "@/components/shared/DashboardSidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_dashboardlayout")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <Outlet />
    </div>
  );
}
