import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section
      id="features"
      className="w-full max-w-4xl mx-auto py-12 md:py-24 main-ele"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg border overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Track expenses, manage budgets, securely. Basic features included.
            </p>
            <div className="flex items-baseline mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary  to-pink-500 text-4xl font-bold uppercase">
                Free
              </span>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Track your expenses
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Categorize your transactions
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Set budgets
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Mobile App access
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Visualize your spendings
              </li>
            </ul>
            <Button className="w-full">Select Plan</Button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg border shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Unlock personalized insights, monthly summaries. Premium features
              for ₹199/mo.
            </p>
            <div className="flex items-baseline mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary  to-pink-500 text-4xl font-bold">
                ₹199
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                /month
              </span>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                All Starter features
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Monthly summary delivered to mailbox
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Customizable budget alerts
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Priority customer support
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Access to premium analytics
              </li>
            </ul>
            <Button className="w-full">Select Plan</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
