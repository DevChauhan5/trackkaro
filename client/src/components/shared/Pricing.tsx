import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg border overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Perfect for individuals and small teams.
            </p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                /month
              </span>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />5 projects
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Unlimited users
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                5GB storage
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Basic analytics
              </li>
            </ul>
            <Button className="w-full">Select Plan</Button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg border shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Ideal for growing teams and businesses.
            </p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                /month
              </span>
            </div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Unlimited projects
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Unlimited users
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                100GB storage
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                Advanced analytics
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
