import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { jsPDF } from 'jspdf';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [pdfUrl, setPdfUrl] = useState("");

  // Función para generar un número aleatorio
  function generateRandomNumber() {
    return Math.floor(Math.random() * 101); // Entre 0 y 1000
  }

  // Función para generar el PDF
  const generatePDF = (number) => {
    const doc = new jsPDF();
    doc.text(`Número generado: ${number}`, 10, 10);
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);
    return url;
  };

  // Función para regenerar el QR
  const regenerateQRCode = () => {
    const newNumber = generateRandomNumber();
    setRandomNumber(newNumber);

    // Generar el PDF y obtener el enlace
    const newPdfUrl = generatePDF(newNumber);
    setPdfUrl(newPdfUrl);
  };

  return (
    <div className="App">
      <div className="qr-container">
        {/* El valor del QR es el enlace para descargar el PDF */}
        <QRCodeCanvas value={pdfUrl} size={256} />
        <p>Número en el QR: {randomNumber}</p>
        <button onClick={regenerateQRCode} className="qr-button">
          Generar nuevo QR
        </button>
      </div>
    </div>
  );
}

export default App;
