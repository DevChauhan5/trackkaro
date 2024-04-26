import { AnalyticsAreaChart } from "@/components/shared/AnalyticsComonents/AnalyticsAreaChart";
import { AnalyticsFiltersDropdown } from "@/components/shared/AnalyticsComonents/AnalyticsFiltersDropdown";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export const Route = createFileRoute("/_protected/_dashboardlayout/analytics")({
  component: Analytics,
});

function Analytics() {
  return (
    <div className="w-full h-[89vh] overflow-y-scroll no-scrollbar py-4 px-5">
      {/* heading and export button */}
      <div className="flex items-center justify-between">
        <div className="text-primary text-2xl">Analytics</div>
        <Button className="flex gap-1 items-center">
          <SquareArrowOutUpRightIcon className="h-5 w-5" />
          Export
        </Button>
      </div>
      {/* filter dropdowns */}
      <AnalyticsFiltersDropdown />
      {/* Charts */}
      <AnalyticsAreaChart />
    </div>
  );
}
