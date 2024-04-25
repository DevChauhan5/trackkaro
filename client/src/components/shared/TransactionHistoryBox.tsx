import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { Separator } from "../ui/separator";

const TransactionHistoryBox = () => {
  return (
    <div className="flex-col border rounded-md p-4 w-full lg:w-1/2">
      {/* name and view all button here */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl">Transaction history</h2>
        <Button className="text-primary" variant={"link"} size={"link"} asChild>
          <Link to="/transactions" className="flex items-center gap-1">
            View All <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      <Separator className="my-2" />

      {/* transtions list */}
      <div className="w-full">
        {/* particular transaction */}

        <div className="mt-4 flex items-center justify-between ">
          <div>
            <div className="text-md font-extrabold">transacton-1</div>
            <span className="text-gray-600 text-sm">Tuesday • 10:35 AM</span>
          </div>
          <span className="text-green-400">+ ₹ 50,000.00</span>
        </div>
        <div className="mt-4 flex items-center justify-between ">
          <div>
            <div className="text-md font-extrabold">transacton-1</div>
            <span className="text-gray-600 text-sm">Tuesday • 10:35 AM</span>
          </div>
          <span className="text-green-400">+ ₹ 50,000.00</span>
        </div>
        <div className="mt-4 flex items-center justify-between ">
          <div>
            <div className="text-md font-extrabold">transacton-1</div>
            <span className="text-gray-600 text-sm">Tuesday • 10:35 AM</span>
          </div>
          <span className="text-red-400">- ₹ 50,000.00</span>
        </div>
        <div className="mt-4 flex items-center justify-between ">
          <div>
            <div className="text-md font-extrabold">transacton-1</div>
            <span className="text-gray-600 text-sm">Tuesday • 10:35 AM</span>
          </div>
          <span className="text-green-400">+ ₹ 50,000.00</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryBox;
