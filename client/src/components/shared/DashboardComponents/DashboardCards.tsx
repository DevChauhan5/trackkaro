import {
  ArrowDownIcon,
  ArrowUpIcon,
  LandmarkIcon,
  LocateFixedIcon,
} from "lucide-react";

const DashboardCards = () => {
  return (
    <div className="mt-2 flex flex-col lg:flex-row items-center justify-between w-full py-10 gap-8">
      {/* cards here */}
        <div className="border w-full lg:w-56 flex-col items-start p-6 rounded-md ">
            <span className="bg-violet-200 rounded-full p-2 flex w-fit"><LandmarkIcon className="w-8 h-8 p-2 rounded-full bg-violet-500"/></span>
            <div className="text-2xl font-bold mt-6">₹ 50,000.00</div>
          <div className="text-md text-gray-400 mt-2">Total Balance</div>
        </div>

        <div className="border w-full lg:w-56 flex-col items-start p-6 rounded-md ">
            <span className="bg-blue-200 rounded-full p-2 flex w-fit"><LocateFixedIcon className="w-8 h-8 p-2 rounded-full bg-blue-500"/></span>
            <div className="text-2xl font-bold mt-6">₹ 10,000.00</div>
          <div className="text-md text-gray-400 mt-2">Budget</div>
        </div>

        <div className="border w-full lg:w-56 flex-col items-start p-6 rounded-md ">
            <span className="bg-green-200 rounded-full p-2 flex w-fit"><ArrowUpIcon className="w-8 h-8 p-2 rounded-full bg-green-500"/></span>
            <div className="text-2xl font-bold mt-6">₹ 20,000.00</div>
          <div className="text-md text-gray-400 mt-2">Income</div>
        </div>

        <div className="border w-full lg:w-56 flex-col items-start p-6 rounded-md ">
            <span className="bg-red-200 rounded-full p-2 flex w-fit"><ArrowDownIcon className="w-8 h-8 p-2 rounded-full bg-red-500"/></span>
            <div className="text-2xl font-bold mt-6">₹ 15,700.00</div>
          <div className="text-md text-gray-400 mt-2">Expense</div>
        </div>
    </div>
  );
};

export default DashboardCards;
