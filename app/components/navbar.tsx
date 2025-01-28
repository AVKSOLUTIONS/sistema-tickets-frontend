// components/Navbar.jsx
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Left Side */}
      <div className="text-xl font-bold text-gray-800"><Link
            to="/"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            AVK
          </Link></div>

      {/* Right Side */}
      <div className="flex justify-between items-center w-1/2">
        {/* Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/acerca"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Acerca
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Dashboard
          </Link>
        </div>

        {/* Profile Image */}
        <div>
          <Link
            to="/CreateAccount"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
}