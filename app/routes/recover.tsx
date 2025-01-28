import React, { useState } from "react";

export default function VerificationPage() {
  const [timer, setTimer] = useState(59);
  const [code, setCode] = useState(new Array(6).fill(""));

  // Simula el temporizador
  React.useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleInputChange = (value: string, index: number) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const resendCode = () => {
    setTimer(59);
    setCode(new Array(6).fill(""));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
        <div className="text-center">
          <img src="/LOGO.png" alt="Logo" className="mx-auto w-24 mb-4" />
          <h1 className="text-xl font-semibold text-gray-800">Recuperar contraseña</h1>
          <p className="text-sm text-gray-600">
            Ingresa el código de verificación
          </p>
          <p className="text-sm text-gray-500">
            Te enviamos un código al correo <strong>marisol1983gui@avksol.com</strong>
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(e.target.value, index)}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              maxLength={1}
            />
          ))}
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>El código caducará en: <strong>00:{timer < 10 ? `0${timer}` : timer}</strong></p>
          <button onClick={resendCode} className="text-blue-500 hover:underline">
            Reenviar código
          </button>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 mt-6 rounded-lg hover:bg-blue-700">
          Enviar código
        </button>
      </div>
    </div>
  );
}
