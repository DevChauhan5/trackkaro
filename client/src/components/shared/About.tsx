import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <img
            alt="About"
            className="w-full h-[300px] object-cover"
            height={400}
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Managing your money shouldn't be a hassle. With Trackkaro, it's
            simple and effortless. Track your expenses on the go, set budgets
            with a few taps, and get automatic spending breakdowns. Get on the
            right track with Trackkaro and experience a smarter way to manage
            your finances.
          </p>
          <Button className="-" size={"lg"} asChild>
            <Link to={"sign-up"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
