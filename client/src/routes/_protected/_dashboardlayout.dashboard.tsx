import { createFileRoute } from "@tanstack/react-router";
import DashboardNav from "@/components/shared/DashboardNav";
import DashboardButtons from "@/components/shared/DashboardButtons";
import DashboardCards from "@/components/shared/DashboardCards";
import TransactionHistoryBox from "@/components/shared/TransactionHistoryBox";
import DataOverviewChart from "@/components/shared/DataOverviewChart";

export const Route = createFileRoute("/_protected/_dashboardlayout/dashboard")({
  component: DashboardComponent,
});

function DashboardComponent() {
  return (
    <div className="w-full ">
      <DashboardNav />

      {/* main container */}
      <div className="py-4 px-5">
        {/* Welcome message */}
        <div className="">
          <h1 className="text-primary text-2xl">Welcome, User</h1>
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
