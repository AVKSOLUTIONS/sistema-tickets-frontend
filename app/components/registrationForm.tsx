import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Briefcase, Heart, Building, Factory, Users, MoreHorizontal } from "lucide-react"; // Importación de íconos

interface RegistrationFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onOtherSelected: (isOtherSelected: boolean) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  step,
  setStep,
  onOtherSelected,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    organizacion: "",
    correoElectronico: "",
    password: "",
    sector: "",
    especificacionOtro: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const handleSectorSelect = (sector: string) => {
    setFormData((prev) => ({
      ...prev,
      sector,
      especificacionOtro: sector === "Otro" ? "" : prev.especificacionOtro,
    }));

    if (sector === "Otro") {
      setStep(3); // Ir directamente a la sección de "Especificar sector"
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Contenedor principal de las secciones */}
      <div className="flex w-full h-full transition-all duration-500 overflow-x-hidden">
        {/* Contenedor de las secciones que se moverán */}
        <div
          className="flex w-max h-full transition-transform duration-500"
          style={{ transform: `translateX(-${step * 100}%)` }}
        >
          {/* Sección 1: Datos personales */}
          <div className="w-full h-full flex-shrink-0 flex flex-col p-4">
            <div className="w-full flex flex-col mb-6 relative">
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="peer bg-transparent border-b-4 border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-primary w-full p-1 pt-5"
              />
              <label
                htmlFor="nombre"
                className={`absolute left-0 text-slate-800 font-bold transition-all duration-300 
                  ${formData.nombre || (focused === "nombre") ? 'top-0 text-xs text-primary mb-2' : 'top-4 text-slate-800'}`}
              >
                Nombre
              </label>
            </div>

            <div className="w-full flex mb-6">
              <div className="w-1/2 pr-2 relative">
                <input
                  type="text"
                  name="apellidoPaterno"
                  id="apellidoPaterno"
                  value={formData.apellidoPaterno}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="peer bg-transparent border-b-4 border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-primary w-full p-1 pt-5"
                />
                <label
                  htmlFor="apellidoPaterno"
                  className={`absolute left-0 text-slate-800 font-bold transition-all duration-300 
                    ${formData.apellidoPaterno || (focused === "apellidoPaterno") ? 'top-0 text-xs text-primary mb-2' : 'top-4 text-slate-800'}`}
                >
                  Apellido Paterno
                </label>
              </div>
              <div className="w-1/2 pl-2 relative">
                <input
                  type="text"
                  name="apellidoMaterno"
                  id="apellidoMaterno"
                  value={formData.apellidoMaterno}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="peer bg-transparent border-b-4 border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-primary w-full p-1 pt-5"
                />
                <label
                  htmlFor="apellidoMaterno"
                  className={`absolute left-0 pl-2  text-slate-800 font-bold transition-all duration-300 
                    ${formData.apellidoMaterno || (focused === "apellidoMaterno") ? 'top-0 text-xs text-primary mb-2' : 'top-4 text-slate-800'}`}
                >
                  Apellido Materno
                </label>
              </div>
            </div>
          </div>

          {/* Sección 2 */}
          <div className="w-full h-full flex-shrink-0 flex flex-col px-4">
            <div className="w-full flex flex-col mb-6 relative">
              <input
                type="text"
                name="organizacion"
                id="organizacion"
                value={formData.organizacion}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="peer bg-transparent border-b-4 border-slate-400 text-sm text-slate-900 focus:outline-none focus:border-primary w-full p-1 pt-5"
              />
              <label
                htmlFor="organizacion"
                className={`absolute left-0 text-slate-800 font-bold transition-all duration-300 
                ${formData.organizacion || (focused === "organizacion") ? "top-0 text-xs text-primary mb-2" : "top-4 text-slate-800"}`}
              >
                Organización
              </label>
            </div>

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
          </div>

          {/* Sección 3: Selección de Sector */}
          <div className="w-full h-full flex-shrink-0 flex flex-col px-2">
            <div className="w-full h-full flex flex-col justify-between pb-4">
              {[
                { label: "Sector Público", icon: Briefcase },
                { label: "Sanidad", icon: Heart },
                { label: "Bienes y Raíces", icon: Building },
                { label: "Manufactura / Industria", icon: Factory },
                { label: "Personal", icon: Users },
                { label: "Otro", icon: MoreHorizontal },
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleSectorSelect(label)}
                  className={`flex items-center justify-start border-4 border-slate-400 ${formData.sector === label
                      ? "bg-primary text-slate-50 border-4 border-blue-300"
                      : "bg-transparent text-slate-800 border border-slate-400"
                    } rounded-xl p-3 transition-all duration-300`}
                >
                  <Icon size={18} className="mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Nueva sección para especificar sector */}
          {formData.sector === "Otro" && (
            <div className="w-full h-full flex-shrink-0 flex flex-col px-4">
              <div className="w-full flex flex-col mb-6 relative">
                <label
                  htmlFor="especificacionOtro"
                  className={`block text-sm text-slate-800 font-bold ${focused === "especificacionOtro" ? "text-primary" : ""
                    }`}
                >
                  Especifica el sector
                </label>
                <input
                  type="text"
                  name="especificacionOtro"
                  id="especificacionOtro"
                  value={formData.especificacionOtro}
                  onChange={handleChange}
                  onFocus={() => setFocused("especificacionOtro")}
                  onBlur={handleBlur}
                  className="mt-2 bg-transparent border-b-4 border-slate-400 text-slate-900 focus:outline-none focus:border-primary w-full p-1"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

