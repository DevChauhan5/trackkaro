import { WalletMinimalIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { AddExpense } from "./AddExpense";

const DashboardButtons = () => {
  return (
    <div className="mt-6 h-fit border flex items-center justify-center w-full py-10 rounded-md space-x-8">
      <AddExpense />

      <Button className="flex-col items-center gap-2 p-2" variant={"nil"}>
        <span className="p-4 rounded-full bg-blue-200">
          <WalletMinimalIcon className="w-8 h-8 p-2 bg-blue-500 rounded-full text-foreground" />
        </span>
        Create Budget
      </Button>
    </div>
  );
};

export default DashboardButtons;
