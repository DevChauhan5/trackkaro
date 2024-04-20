import { Link } from "react-router-dom"

export default function footer() {
  return (
    <footer className="flex flex-col gap-4 py-8 px-4 sm:flex-row sm:items-center sm:justify-between ">
      <div className="flex items-center gap-2">
        <Link className="flex items-center" to="#">
          <img className="h-8 rounded-md" src="/logo-light.webp" alt="trackkaro_logo" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="text-sm text-gray-500 dark:text-gray-400">© 2024 trackkaro. All rights reserved.</div>
      </div>
      <nav className="flex flex-wrap items-center gap-4 text-sm">
        <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="#">
          Terms
        </Link>
        <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="#">
          Privacy
        </Link>
        <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="#">
          Contact
        </Link>
      </nav>
    </footer>
  )
}
