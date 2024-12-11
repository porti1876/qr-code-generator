import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  // Función para generar un número aleatorio entre 1 y 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1; // Números entre 1 y 100
  }

  // Función para regenerar el QR con un nuevo número aleatorio
  const regenerateQRCode = () => {
    setRandomNumber(generateRandomNumber());
  };

  return (
    <div className="App">
      <div className="qr-container">
        {/* Generar el QR apuntando al PDF correspondiente */}
        <QRCodeCanvas
          value={`${window.location.origin}/pdf/${randomNumber}.pdf`}
          size={256}
        />
        <p>Número en el QR: {randomNumber}</p>
        <button onClick={regenerateQRCode} className="qr-button">
          Generar nuevo QR
        </button>
      </div>
    </div>
  );
}

export default App;
