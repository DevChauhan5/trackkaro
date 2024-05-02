import { makeRequest } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { ArrowDownIcon, LocateFixedIcon } from "lucide-react";

const DashboardCards = () => {
  const { isPending, data } = useQuery({
    queryKey: ["total-expense"],
    queryFn: async () => {
      try {
        const res = await makeRequest.get("expense/total-expenses");
        return res.data;
      } catch (err) {
        return err;
      }
    },
  });
  return (
    <div className="mt-2 flex flex-col lg:flex-row items-center justify-around w-full py-10 gap-8">
      {/* cards here */}

      <div className="border w-full  flex-col items-start p-6 rounded-md ">
        <span className="bg-blue-200 rounded-full p-2 flex w-fit">
          <LocateFixedIcon className="w-8 h-8 p-2 rounded-full bg-blue-500" />
        </span>
        <div className="text-2xl font-bold mt-6">₹ 10,000.00</div>
        <div className="text-md text-gray-400 mt-2">Budget</div>
      </div>

      <div className="border w-full flex-col items-start p-6 rounded-md ">
        <span className="bg-red-200 rounded-full p-2 flex w-fit">
          <ArrowDownIcon className="w-8 h-8 p-2 rounded-full bg-red-500" />
        </span>
        <div className="text-2xl font-bold mt-6">
          ₹
          {isPending ? (
            <p className="text-green-400">getting expense...</p>
          ) : (
            data
          )}
        </div>
        <div className="text-md text-gray-400 mt-2">Expense</div>
      </div>
    </div>
  );
};

export default DashboardCards;
