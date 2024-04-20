import { NavLink } from "react-router-dom";
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "./theme-toggle";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav className="sticky top-0 backdrop-blur-md flex items-center z-30 justify-between shadow-md shadow-secondary main-ele">
      {/* trackkaro logo */}
      <img
        className="max-h-16"
        src={`${
          theme === "dark" ? "full-logo-dark.webp" : "full-logo-light.webp"
        }`}
        alt="trackkaro"
      />

      {/* navbar links */}
      <div className="hidden md:flex items-center gap-x-4">
        <NavLink className={"nav-link"} to={"#about"}>
          About
        </NavLink>
        <NavLink className={"nav-link"} to={"#pricing"}>
          Pricing
        </NavLink>
        <NavLink className={"nav-link"} to={"#features"}>
          Features
        </NavLink>
      </div>

      {/* Sign-in and Get-Started Buttons */}
      <div className="hidden md:flex items-center gap-x-4">
        <Button className="" asChild variant={"outline"}>
          <NavLink to={"/sign-in"}>Sign In</NavLink>
        </Button>
        <Button className="" asChild>
          <NavLink to={"/sign-up"}>Get Started</NavLink>
        </Button>
        <ThemeToggle />
      </div>

      {/* mobile menu */}
      <MenuIcon className="block md:hidden max-h-16" />
    </nav>
  );
};

export default Navbar;
