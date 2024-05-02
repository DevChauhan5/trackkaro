import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { makeRequest } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const DeleteExpenses = ({ transaction }: any) => {
  const queryclient = useQueryClient();
  const [deleteBoxOpen, setDeleteBoxOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await makeRequest.delete(
        `/expense/delete-expense/${transaction.id}`
      );
      return res.data;
    },
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["total-expense", "list-expense", "list-recent-expense"],
      });
      setDeleteBoxOpen(false);
      toast.success("Expense deleted successfully");
    },
    onError: () => {
      toast.error("Error deleting expense");
    },
  });
  return (
    <Dialog open={deleteBoxOpen} onOpenChange={setDeleteBoxOpen}>
      <DialogTrigger className="hover:text-red-500 text-destructive">
        <Trash2Icon className="h-5 w-5 " />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Delete this transaction</DialogTitle>
          <DialogDescription className="">
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => {
              mutation.mutate();
            }}
            variant={"destructive"}
          >
            {mutation.isPending ? "Deleting..." : "Deleting Expense"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
