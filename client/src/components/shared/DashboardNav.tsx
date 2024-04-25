import { Input } from "@/components/ui/input";
import { BellIcon, SearchIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { UserAvatar } from "./UserAvatar";

const DashboardNav = () => {
  return (
    <nav className="p-3 w-full flex items-center justify-end border-b">
      {/* search input */}
      <div className="flex items-center bg-secondary rounded-xl justify-center py-1 px-3 ml-auto">
        <SearchIcon className="w-4" />
        <Input
          className="border-0 py-0 bg-transparent outline-none"
          placeholder="Search"
        />
      </div>
      {/* notification and user icon */}
      <div className="flex mx-7 h-5 items-center space-x-4 text-sm">
      <BellIcon className=""/>
      <Separator orientation="vertical" className="h-8 w-[0.5px] mx-2"/>
      <UserAvatar />
      </div>
    </nav>
  );
};

export default DashboardNav;
