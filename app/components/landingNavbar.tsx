import { useNavigate } from "@remix-run/react";

export default function LandingNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full p-4 bg-transparent px-8 py-6 flex items-center">
      <button
        onClick={() => navigate(-1)} // Navega a la página anterior
        className="text-blue-600 flex items-center hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </nav>
  );
}