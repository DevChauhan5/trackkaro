import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const TransactionDropdown = () => {
  return (
    <div className="flex items-center gap-6 mt-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-1 text-secondary bg-slate-300 rounded-md" variant="link">
            All Budgets <ChevronDownIcon className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42 mx-4">
          <DropdownMenuCheckboxItem>Monthly</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Weekly</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Daily</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-1 text-secondary bg-slate-300 rounded-md" variant="link">
            Weekly <ChevronDownIcon className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42 mx-4">
          <DropdownMenuCheckboxItem>Monthly</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Weekly</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Daily</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TransactionDropdown;
