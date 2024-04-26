import { Area, AreaChart, Tooltip, XAxis } from "recharts";
import { Separator } from "../../ui/separator";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { ChevronDownIcon } from "lucide-react";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

const data = [
  {
    name: "Week 1",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 2500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Week 5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Week 6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Week 7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
// type Checked = DropdownMenuCheckboxItemProps["checked"];

const DataOverviewChart = () => {

  return (
    <div className="flex-col border rounded-md p-4 w-full lg:w-1/2">
      {/* heading and dopdown menu */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl">Transaction history</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="gap-1 text-primary" variant="link">Weekly <ChevronDownIcon className="h-5 w-5" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-42 mx-4">
            <DropdownMenuCheckboxItem >
              Monthly
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Weekly
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Daily
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Separator className="my-2" />
      <AreaChart
        className="mt-2"
        width={500}
        height={240}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default DataOverviewChart;
