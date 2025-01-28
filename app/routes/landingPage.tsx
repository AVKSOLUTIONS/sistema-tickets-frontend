import { useState } from "react";
import { CircleIcon } from "lucide-react";

const slides = [
  {
    title: "Todo en un solo lugar, más fácil, más rápido",
    subtitle: "La herramienta que necesitas para mantener todo bajo control.",
    image: "/avk-logo.svg",
  },
  {
    title: "Gestiona tus proyectos",
    subtitle: "Mantén el control de tus tareas y proyectos en un solo lugar.",
    image: "/avk-logo.svg",
  },
  {
    title: "Colabora en tiempo real",
    subtitle: "Trabaja con tu equipo de manera eficiente y sincronizada.",
    image: "/avk-logo.svg",
  },
  {
    title: "¡Comienza ahora!",
    subtitle: "Únete a AVK Solutions y mejora tu productividad.",
    image: "/avk-logo.svg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Main Content */}
      <div className="h-screen flex flex-col items-center justify-center px-6">
        {/* Logo Container */}
        <div>
          <img src="/LOGO.png" alt="Logo" className="w-60 h-60" />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-400 mb-12">{slides[currentSlide].subtitle}</p>
        </div>

        {/* Navigation Dots */}
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="focus:outline-none"
            >
              <CircleIcon
                size={8}
                className={`${
                  currentSlide === index ? "text-blue-500" : "text-gray-500"
                }`}
                fill={currentSlide === index ? "#0052FF" : "none"}
              />
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full max-w-md px-4">
          <button
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => setCurrentSlide(0)}
          >
            Saltar
          </button>
          <button
            className="text-blue-500 hover:text-blue-400 transition-colors"
            onClick={nextSlide}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
 