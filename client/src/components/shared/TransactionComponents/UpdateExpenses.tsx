import { makeRequest } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SquarePenIcon } from "lucide-react";

const updateformSchema = z.object({
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  amount: z.number().positive({
    message: "amount must be a positive number.",
  }),
  category: z.string().min(2, {
    message: "category must be at least 2 characters.",
  }),
});

const UpdateExpenses = ({ transaction }: any) => {
  const form = useForm<z.infer<typeof updateformSchema>>({
    resolver: zodResolver(updateformSchema),
    defaultValues: {
      description: transaction.description,
      amount: transaction.amount,
      category: transaction.category,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof updateformSchema>) {
    const res = await makeRequest.patch(
      `/expense/update-expense/${transaction.id}`,
      values
    );
    return res.data;
  }
  const queryclient = useQueryClient();
  const [updateBoxOpen, setUpdateBoxOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["total-expense", "list-expense", "list-recent-expense"],
      });
      setUpdateBoxOpen(false);
      toast.success("Expense updated successfully");
    },
    onError: () => {
      toast.error("Error updating expense");
    },
  });
  return (
    <Dialog open={updateBoxOpen} onOpenChange={setUpdateBoxOpen}>
      <DialogTrigger className="hover:text-yellow-400">
        <SquarePenIcon className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Expense</DialogTitle>
          <DialogDescription>
            Modify the expense details accordingly
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) => {
                mutation.mutate(values);
              })}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Description"
                        {...field}
                        onChange={(e) => {
                          field.onChange(
                            e.target.value ? parseInt(e.target.value, 10) : ""
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                {mutation.isPending ? "updating..." : "Update Expense"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateExpenses;
