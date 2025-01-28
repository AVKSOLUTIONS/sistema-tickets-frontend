import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import LandingNavbar from "../components/landingNavbar";
import { Eye, EyeOff } from "lucide-react"; // Importación de íconos

export default function Login() {
  const [formData, setFormData] = useState({
    correoElectronico: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(e.target.name);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(null);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Lógica para hacer login (puedes integrarlo con tu sistema de autenticación)
    console.log("Iniciar sesión con:", formData);
    navigate("/dashboard"); // Redirige a la página de dashboard o cualquier página principal
  };

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      <LandingNavbar />

      <div className="w-full h-full flex flex-col items-center justify-start pb-4 px-20 relative">
        <div className="w-64 h-32 py-4">
          <img
            src="/images/logos/Horizontal_blue.png"
            alt="Imagen"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-xl font-bold text-primary py-2 border-t-4 border-primary">
          Iniciar sesión
        </h1>

        <div className="w-1/4 h-full flex flex-col items-center justify-between py-4 rounded-3xl">
          {/* Formulario de login */}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-6 relative">
              <input
                type="email"
                name="correoElectronico"
                id="correoElectronico"
                value={formData.correoElectronico}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="peer bg-transparent border-b-4 border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-primary w-full p-1 pt-5"
              />
              <label
                htmlFor="correoElectronico"
                className={`absolute left-0 text-slate-800 font-bold transition-all duration-300 
                          ${formData.correoElectronico || (focused === "correoElectronico") ? "top-0 text-xs text-primary mb-2" : "top-4 text-slate-800"}`}
              >
                Correo Electrónico
              </label>
            </div>

            <div className="w-full flex flex-col mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="peer bg-transparent border-b-4 border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-primary w-full p-1 pt-5"
              />
              <label
                htmlFor="password"
                className={`absolute left-0 text-slate-800 font-bold transition-all duration-300 
                          ${formData.password || (focused === "password") ? "top-0 text-xs text-primary mb-2" : "top-4 text-slate-800"}`}
              >
                Contraseña
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-700 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {/* Enlace para recuperar la contraseña */}
            <div className="text-center">
              <p className="text-sm text-slate-700">
                ¿Olvidaste tu contraseña?{" "}
                <a
                  href="/recover"
                  className="text-primary hover:underline"
                >
                  Recuperarla aquí
                </a>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="w-full text-white p-4 bg-primary rounded-full"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
