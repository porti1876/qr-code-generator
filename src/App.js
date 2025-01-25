import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const canvasRef = useRef(null);

  // Función para generar un número aleatorio entre 1 y 1000
  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1; // Números entre 1 y 1000
  }

  // Función para regenerar el QR con un nuevo número aleatorio
  const regenerateQRCode = () => {
    setRandomNumber(generateRandomNumber());
  };

  // Generar el QR en el canvas
  useEffect(() => {
    const canvas = canvasRef.current;

    // Generar el QR con la URL correspondiente
    const qrData = `${window.location.origin}/pdf/${randomNumber}.pdf`;

    // Configuración del QR
    QRCode.toCanvas(canvas, qrData, { width: 256, margin: 1 }, (error) => {
      if (error) console.error(error);

      // Superponer el número en el centro del QR
      const ctx = canvas.getContext("2d");

      // Dibujar un fondo blanco en el centro del QR (opcional para mejor visibilidad)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const boxSize = 50; // Tamaño del fondo del texto
      ctx.fillStyle = "white";
      ctx.fillRect(centerX - boxSize / 2, centerY - boxSize / 2, boxSize, boxSize);

      // Dibujar el número en el centro
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(randomNumber, centerX, centerY);
    });
  }, [randomNumber]);

  return (
    <div className="App">
      <div className="qr-container">
        <canvas ref={canvasRef} />
        <p>Número en el QR: {randomNumber}</p>
        <button onClick={regenerateQRCode} className="qr-button">
          Generar nuevo QR
        </button>
      </div>
    </div>
  );
}

export default App;
