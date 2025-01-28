import { useNavigate } from "@remix-run/react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <div className="flex flex-col items-center justify-center my-auto">
        {/* Logo Section */}
        <div>
          <img
            src="/images/logos/Sello-blue.png"
            alt="Logo"
            className="w-60 h-60"
          />
        </div>

        {/* Text Section */}
        <h1 className="mt-6 text-4xl font-bold text-center text-blue-700">
          AVK SOLUTIONS
        </h1>
        <p className="mt-4 text-center text-2xl font-semibold text-gray-700">
          Todo en un solo lugar, más fácil, más rápido
        </p>
        <p className="mt-2 text-lg text-center text-gray-500">
          La herramienta que necesitas para mantener todo bajo control.
        </p>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
            onClick={() => navigate("/CreateAccount")} // Redirige a la página de registro
            className="w-48 px-4 py-3 text-sm text-white bg-blue-700 rounded-full shadow-md hover:bg-blue-800"
          >
            REGISTRARSE
          </button>
          <button
            onClick={() => navigate("/login")} // Redirige a la página de inicio de sesión
            className="text-sm text-blue-700 underline hover:text-blue-800"
          >
            INICIAR SESIÓN
          </button>
        </div>
      </div>
    </div>
  );
}
