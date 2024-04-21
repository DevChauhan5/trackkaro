import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/(auth)/sign-in")({
  component: SignIn,
});

 
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  })
})
const url = `${import.meta.env.VITE_TRACKKARO_BASE_URL}/user/login`

function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })
 
  async function  onSubmit(values: z.infer<typeof formSchema>) {
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values), 
    });
    if (response.ok) {
      const data = await response.json();
      toast.success(data.message)
      // redirect to dashboard
    } else{
      const data = await response.json();
      toast.error(data.message);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 dark:bg-gray-900 main-ele">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Login to your account
          </h1>
          <img src="/logo-light.webp" alt="trackkaro_logo" className="border h-12 rounded-md"/>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400 ml-2"
              to="/sign-up"
            >
              Sign up
            </Link>
          </p>
        </div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Choose a Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Create a password!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Login</Button>
      </form>
    </Form>
      </div>
    </main>
  );
}
