import React, { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function VerificationCode() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(59); // Tiempo inicial en segundos
  const navigate = useNavigate();

  // Manejo de cambios en los inputs
  const handleChange = (value, index) => {
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < code.length - 1) {
        document.getElementById(`input-${index + 1}`)?.focus();
      }
    }
  };

  // Temporizador
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer); // Limpieza del temporizador
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    const fullCode = code.join("");
    console.log("Código ingresado:", fullCode);

    if (fullCode.length === 5) {
      navigate("/confirmation");
    }
  };

  // Formatear tiempo
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#F8F9FC",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
     
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Logo */}
        <img
          src="/images/logos/Horizontal-blue.png"
          alt="AVK Solutions Logo"
          style={{
            marginBottom: "24px",
            width: "180px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#111827",
            marginBottom: "16px",
          }}
        >
          Ingrese el código de verificación
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#6B7280",
            marginBottom: "24px",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          Te enviamos un código de verificación por teléfono <br /> +52 556785678
        </p>

        {/* Input de Código */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {code.map((digit, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              style={{
                width: "48px",
                height: "48px",
                textAlign: "center",
                fontSize: "18px",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                outline: "none",
              }}
            />
          ))}
        </div>

        {/* Botón de Enviar */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "200px",
            backgroundColor: "#1947BA",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "24px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          Enviar código
        </button>

        {/* Temporizador dinámico */}
        <p style={{ fontSize: "14px", color: "#9CA3AF", marginBottom: "16px" }}>
          El código de verificación caducará en {formatTime(timeLeft)}
        </p>
        <button
          style={{
            color: "#2563EB",
            fontSize: "16px",
            background: "none",
            border: "none",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Reenviar código
        </button>
      </div>
    </div>
  );
}
