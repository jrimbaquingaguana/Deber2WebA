
import React, { useState } from 'react';
import './Section.css';

function Section() {
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="section" style={{ backgroundColor }}>
      <h2>Pagina de Jose Imbaquinga y Ricardo Rivadeneria</h2>
      <p>¡Haz clic en el botón para cambiar el color de fondo!</p>
      <button onClick={changeBackgroundColor}>Cambiar Color</button>
    </div>
  );
}

export default Section;
