import { MinusIcon, PlusIcon, WalletMinimal } from "lucide-react";
import { Button } from "../../ui/button";
import { makeRequest } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const DashboardButtons = () => {
  const queryclient = useQueryClient();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expenseBoxOpen, setExpenseBoxOpenn] = useState(false);

  const mutation = useMutation({
    mutationFn: async ({ description, amount, category }) =>
      await makeRequest.post("/expense/create-expense", {
        description,
        amount,
        category,
      }),
    onSuccess: () => {
      setDescription("");
      setAmount("");
      setCategory("");
      queryclient.invalidateQueries({ queryKey: ["total-expense"] })
      setExpenseBoxOpenn(false);
      toast.success("Expense added successfully");
    },
    onError: () => {
      toast.error("Error adding expense");
    },
  });
  return (
    <div className="mt-6 h-fit border flex items-center justify-center w-full py-10 rounded-md space-x-8">
      <Dialog open={expenseBoxOpen} onOpenChange={setExpenseBoxOpenn}>
        <DialogTrigger>
          <Button className="flex-col items-center gap-2 p-2" variant={"nil"}>
            <span className="p-4 rounded-full bg-red-200">
              <MinusIcon className="w-8 h-8 p-2 bg-red-500 rounded-full text-foreground" />
            </span>
            Add Expense
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Expense</DialogTitle>
            <DialogDescription>Fill up the expense details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Title here..."
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                value={amount}
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount here..."
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                value={category}
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category here..."
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                mutation.mutate({ description, amount, category });
              }}
            >
              {mutation.isPending ? "Adding..." : "Add Expense"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button className="flex-col items-center gap-2 p-2" variant={"nil"}>
        <span className="p-4 rounded-full bg-green-200">
          <PlusIcon className="w-8 h-8 p-2 bg-green-500 rounded-full text-foreground" />
        </span>
        Top Up
      </Button>
      <Button className="flex-col items-center gap-2 p-2" variant={"nil"}>
        <span className="p-4 rounded-full bg-blue-200">
          <WalletMinimal className="w-8 h-8 p-2 bg-blue-500 rounded-full text-foreground" />
        </span>
        Create Budget
      </Button>
    </div>
  );
};

export default DashboardButtons;
