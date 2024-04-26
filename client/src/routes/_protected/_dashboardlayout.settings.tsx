import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
import UserProfile from "@/components/shared/settingsComponents/UserProfile";
import { makeRequest } from "@/lib/axios";
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";

export const Route = createFileRoute("/_protected/_dashboardlayout/settings")({
  component: Settings,
});

function Settings() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleUserDelete = () => {
    // handle delete user
    makeRequest
      .delete("/user/delete-user")
      .then((res) => {
        toast.success("User deleted successfully");
        logout();
        setTimeout(() => {
          navigate({ to: "/sign-up" });
        }, 1500);
      })
      .catch((err) => {
        toast.error("Error deleting user");
      });
  };
  return (
    <div className="w-full h-[89vh] overflow-y-scroll no-scrollbar py-4 px-5">
      {/* main container */}
      <div className="">
        <h1 className="text-2xl text-primary">Settings</h1>
      </div>
      {/* user profile */}
      <UserProfile />

      {/* delelte user button */}
      <Dialog>
        <DialogTrigger className="mt-6" asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              This action is irreversible. Are you sure you want to delete your
              account?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={handleUserDelete} variant={"destructive"}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
