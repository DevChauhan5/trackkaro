
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { CircleArrowDownIcon } from "lucide-react";

const Hero = () => {
  return (
    <main className="h-[90vh] w-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center main-ele">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] light:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="-translate-y-20 text-4xl md:text-7xl font-bold relative z-20 py-8 text-center">
        Get on the right{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary  to-pink-500">
          track
        </span>{" "}
        with
        <br />{" "}
        <span className="text-6xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-primary  to-pink-500">
          trackkaro
        </span>
      </div>
      <div className="-translate-y-24 text-center text-lg md:text-2xl leading-9">
      Track Expenses, Stay on Budget, Thrive Financially.
      </div>
      <Button className="-translate-y-16" size={"lg"} asChild>
        <Link to={"sign-up"}>Get Started</Link>
      </Button>
      <CircleArrowDownIcon className="absolute bottom-8 animate-bounce w-10 h-10 dark:text-white" />
    </main>
  );
};

export default Hero;
