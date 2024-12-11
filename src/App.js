import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';

function App() {
  // Estado para el número aleatorio
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  // Función para generar un número aleatorio
  function generateRandomNumber() {
    return Math.floor(Math.random() * 1001); // Entre 0 y 1000
  }

  // Función para regenerar el QR
  const regenerateQRCode = () => {
    setRandomNumber(generateRandomNumber());
  };

  return (
    <div className="App">
      <div className="qr-container">
      <QRCodeCanvas value={String(randomNumber)} size={256} />
        <p>Número en el QR: {randomNumber}</p>
        <button onClick={regenerateQRCode} className="qr-button">Generar nuevo QR</button>
      </div>
    </div>
  );
}

export default App;
