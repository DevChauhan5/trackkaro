import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Link } from "@tanstack/react-router";
import { Separator } from "../../ui/separator";
import { fetExpenseList } from "@/api/expenseRequest";
import { useQuery } from "@tanstack/react-query";
import formatDateTime from "@/lib/formatDateTime";

const TransactionHistoryBox = () => {
  const { isPending, data } = useQuery({
    queryKey: ["list-recent-expense"],
    queryFn: fetExpenseList,
  });
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
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          {/* particular transaction */}

          {data?.slice(-4).map((transaction, index) => (
            <div
              key={index}
              className="mt-4 flex items-center justify-between "
            >
              <div>
                <div className="text-md font-extrabold">
                  {transaction.description}
                </div>
                <span className="text-gray-600 text-sm">
                  {formatDateTime(transaction.updatedAt)}
                </span>
              </div>
              <span className="">₹ {transaction.amount}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionHistoryBox;
