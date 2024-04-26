
import DashboardNav from "@/components/shared/DashboardComponents/DashboardNav";
import DashboardSidebar from "@/components/shared/DashboardComponents/DashboardSidebar";
import useAuth from "@/hooks/useAuth";
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_dashboardlayout")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (user === null) {
    navigate({ to: "/sign-in" });
  }
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
