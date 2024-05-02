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
import { MinusIcon } from "lucide-react";

const formSchema = z.object({
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

export const AddExpense = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      amount: 0,
      category: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await makeRequest.post("/expense/create-expense", values);
    return res.data;
  }

  const queryclient = useQueryClient();
  const [expenseBoxOpen, setExpenseBoxOpenn] = useState(false);

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["total-expense", "list-expense", "list-recent-expense"],
      });
      setExpenseBoxOpenn(false);
      toast.success("Expense added successfully");
    },
    onError: () => {
      toast.error("Error adding expense");
    },
  });
  return (
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
                {mutation.isPending ? "Adding..." : "Add Expense"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
