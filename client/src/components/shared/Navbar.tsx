
import { useTheme } from "../theme-provider";
import { ThemeToggle } from "./theme-toggle";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

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
        <Link className={"nav-link"} to="#about">
          About
        </Link>
        <Link className={"nav-link"} to={"#pricing"}>
          Pricing
        </Link>
        <Link className={"nav-link"} to={"#features"}>
          Features
        </Link>
      </div>

      {/* Sign-in and Get-Started Buttons */}
      <div className="hidden md:flex items-center gap-x-4">
        <Button className="" asChild variant={"outline"}>
          <Link to="/">Sign In</Link>
        </Button>
        <Button className="" asChild>
          <Link to={"/"}>Get Started</Link>
        </Button>
        <ThemeToggle />
      </div>

      {/* mobile menu */}
      <MenuIcon className="block md:hidden max-h-16" />
    </nav>
  );
};

export default Navbar;
