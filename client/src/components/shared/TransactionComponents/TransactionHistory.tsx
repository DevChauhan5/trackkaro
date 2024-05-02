import { fetExpenseList } from "@/api/expenseRequest";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import formatDate from "@/lib/formatDate";
import { useQuery } from "@tanstack/react-query";
import { EllipsisVerticalIcon } from "lucide-react";
import UpdateExpenses from "./UpdateExpenses";
import { DeleteExpenses } from "./DeleteExpenses";

export const TransactionHistory = () => {
  const { isPending, data } = useQuery({
    queryKey: ["list-expense"],
    queryFn: fetExpenseList,
  });
  return (
    <main className="mt-6 border">
      <div className="text-xl mt-2 px-2">History</div>
      <Separator className="my-2" />
      {isPending ? (
        <p className="text-green-400 animate-ping">fetching transactions...</p>
      ) : (
        <Table>
          <TableCaption className="my-2">
            A list of your recent Transactions.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No.</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Update</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((transaction: any, index: number) => (
              <TableRow key={index} className="">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{formatDate(transaction.updatedAt)}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell className="text-right">
                  <UpdateExpenses transaction={transaction} />
                </TableCell>
                <TableCell className="text-right">
                  <DeleteExpenses transaction={transaction} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </main>
  );
};
