"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const content = [
  {
    title: "Effortless Expense Tracking",
    description:
      "Say goodbye to manual entries and tedious spreadsheets. Trackkaro allows you to seamlessly record your income and expenses on the go. Simply add transactions with a few taps, categorize them for easy organization, and gain a holistic view of your financial health.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://img.freepik.com/free-vector/app-monetization-concept-illustration_114360-7404.jpg?t=st=1713687205~exp=1713690805~hmac=1ae2c0aa279c07899f9dddeabf072427e8c2dba9da40d41a3abac4dd7ebd159f&w=740"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Smart Budgeting & Goal Setting",
    description:
      "Financial goals become achievable with Trackkaro's intuitive budgeting tools. Create custom budgets for different categories like groceries, shopping, or bills. Set realistic spending limits and receive real-time progress trackers to stay on top of your goals.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://img.freepik.com/premium-vector/budget-management-app-personal-financial-control-cash-flow-tiny-woman-manages-personal-budget_501813-276.jpg?w=740"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Powerful Insights & Reporting",
    description:
      "Trackkaro goes beyond basic tracking. Gain valuable insights with clear and informative charts and graphs. Visualize your spending patterns, identify areas for improvement, and make informed financial decisions based on data-driven reports.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://img.freepik.com/free-vector/gradient-insights-illustration_23-2149322241.jpg?t=st=1713687390~exp=1713690990~hmac=78808f783f080f4e5f56bf97d1bb33e124f037d3dda6dc64f69d2cb9d70e2c85&w=740"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Secure & Seamless Data Management",
    description:
      "Managing your finances requires trust. Trackkaro prioritizes your data security with robust encryption and secure cloud storage. Access your financial information anytime, anywhere, with the peace of mind that your data is protected.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://img.freepik.com/free-vector/creative-abstract-ssl-illustration_52683-79797.jpg?t=st=1713687457~exp=1713691057~hmac=de2ae22304c8e35469bd04967059fb93dffbd8ce611a6965a8bde6cc8ddc30e5&w=740"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export const Features = () => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--violet-600)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto no-scrollbar flex justify-center relative space-x-10 p-10"
      ref={ref}
      id="features"
    >
      <div className="div relative flex items-start px-4 ">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
