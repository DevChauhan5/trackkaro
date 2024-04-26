import { TransactionDateSelect } from "@/components/shared/TransactionComponents/TransactionDateSelect";
import TransactionDropdown from "@/components/shared/TransactionComponents/TransactionDropdown";
import { TransactionHistory } from "@/components/shared/TransactionComponents/TransactionHistory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_protected/_dashboardlayout/transactions"
)({
  component: Transactions,
});

function Transactions() {
  return (
    <div className="w-full h-[89vh] overflow-y-scroll no-scrollbar py-4 px-5">
      <h1 className="text-primary text-2xl">Transactions</h1>
      {/* budget and category dropdowns here */}
      <TransactionDropdown />
      {/* start date and end date inputs here */}
      <TransactionDateSelect />
      {/* transaction history table here */}
      <TransactionHistory />
    </div>
  );
}
