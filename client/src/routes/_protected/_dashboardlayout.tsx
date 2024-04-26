import DashboardNav from "@/components/shared/DashboardNav";
import DashboardSidebar from "@/components/shared/DashboardSidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_dashboardlayout")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="flex w-full">
      <DashboardSidebar />
      <div className="flex flex-col w-full">
        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
}
