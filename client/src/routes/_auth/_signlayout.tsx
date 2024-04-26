import AuthContext from "@/context/authContext";
import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useContext } from "react";

export const Route = createFileRoute("/_auth/_signlayout")({
  component: SignLayout,
});

function SignLayout() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate({ to: "/dashboard" });
  }
  return <Outlet />;
}
