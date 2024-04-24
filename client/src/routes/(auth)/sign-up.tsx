import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "axios";
import { useBoolean } from "usehooks-ts";
import Loading from "@/components/Loading";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/sign-up")({
  component: SignUp,
});

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
const url = `${import.meta.env.VITE_TRACKKARO_BASE_URL}/user/register`;

function SignUp() {
  const navigate = useNavigate();
  const { value, setTrue, setFalse } = useBoolean(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setTrue();
    axios
      .post(url, values)
      .then(function (response) {
        if (response.status === 201) {
          toast.success(
            "Account created successfully! Please login to continue."
          );
        }
        navigate({
          to: '/sign-in',
        })
        setFalse();
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong! Please try again later.");
        }
        setFalse();
      });
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 dark:bg-gray-900 main-ele">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Create an account
            </h1>
            <img
              src="/logo-light.webp"
              alt="trackkaro_logo"
              className="border h-12 rounded-md"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400 ml-2"
              to="/sign-in"
            >
              Sign in
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Email!" {...field} />
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
                    <Input
                      type="password"
                      placeholder="Create a password!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              {value ? (
                <Loading text={"Creating Account..."} />
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  )
}
