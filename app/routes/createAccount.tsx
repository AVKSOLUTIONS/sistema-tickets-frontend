import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { RegistrationForm } from "../components/RegistrationForm";
import LandingNavbar from "../components/landingNavbar";

export default function CreateAccount() {
  const [steps, setSteps] = useState(["Información básica", "Dirección", "Preferencias"]); // Pasos iniciales
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // Manejar la detección de pasos dinámicos
  const handleDynamicSteps = (isOtherSelected: boolean) => {
    if (isOtherSelected && !steps.includes("Otros")) {
      setSteps([...steps, "Otros"]); // Agregar paso dinámico
    } else if (!isOtherSelected && steps.includes("Otros")) {
      setSteps(steps.filter((s) => s !== "Otros")); // Eliminar paso dinámico
    }
  };

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/verification");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      <LandingNavbar />

      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="w-72 h-32 pb-4">
          <img
            src="/images/logos/Horizontal-blue.png"
            alt="Imagen"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-xl font-bold text-primary py-2 border-t-4 border-primary">
          Crear cuenta
        </h1>

        <div className="w-1/4 h-full flex flex-col items-center justify-between py-4 rounded-3xl">
          {/* Componente del formulario */}
          <RegistrationForm
            step={step}
            setStep={setStep}
            onOtherSelected={handleDynamicSteps} // Comunicación con el formulario
          />

          {/* Botón de navegación */}
          <div className="w-full flex justify-center">
            <button
              className="w-full text-white p-4 bg-primary rounded-full"
              onClick={handleNextStep}
            >
              {step < steps.length - 1 ? "Continuar" : "Finalizar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
