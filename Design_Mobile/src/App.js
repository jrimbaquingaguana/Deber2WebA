// src/components/App/App.js

import React from 'react';
import Section from './Section';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Bienvenido a mi sitio web</h1>
      </header>
      <main>
        <Section />
        {/* Otras secciones y componentes */}
      </main>
    </div>
  );
}

export default App;
