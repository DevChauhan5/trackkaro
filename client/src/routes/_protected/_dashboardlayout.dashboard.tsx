import { createFileRoute } from "@tanstack/react-router";
import DashboardButtons from "@/components/shared/DashboardButtons";
import DashboardCards from "@/components/shared/DashboardCards";
import TransactionHistoryBox from "@/components/shared/TransactionHistoryBox";
import DataOverviewChart from "@/components/shared/DataOverviewChart";
import useAuth from "@/hooks/useAuth";

export const Route = createFileRoute("/_protected/_dashboardlayout/dashboard")({
  component: DashboardComponent,
});

function DashboardComponent() {
  const { user } = useAuth();
  return (
    <div className="w-full h-[89vh] overflow-y-scroll no-scrollbar">
      {/* main container */}
      <div className="py-4 px-5">
        {/* Welcome message */}
        <div className="">
          <h1 className="text-primary text-2xl">
            Welcome, {(user as any)?.username}
          </h1>
          <span className="mt-2 text-sm text-secondary">
            Continue your journey to financial success
          </span>
        </div>

        {/* Add, topup and create budget buttons here */}
        <DashboardButtons />

        {/* Total Balance, Budget, Income and Expense cards here */}
        <DashboardCards />

        {/* transaction history box and data overview chart here */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <TransactionHistoryBox />
          <DataOverviewChart />
        </div>
      </div>
    </div>
  );
}
