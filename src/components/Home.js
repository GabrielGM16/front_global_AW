// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Bienvenido a la Plataforma de Gestión de Captura de PET</h2>
      <p className="home-description">
        Nuestra plataforma está diseñada para facilitar el monitoreo, registro y análisis de la recolección de PET, ayudando a promover la
        sostenibilidad y el reciclaje.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="PET Management Example"
        className="home-image"
      />
      <section className="home-features">
        <h3>Características de la Plataforma</h3>
        <ul>
          <li>Registro semanal de recolección de PET con cálculo de precios en USD y MXN</li>
          <li>Visualización y reporte detallado de capturas de PET</li>
          <li>Interfaz intuitiva para un seguimiento eficaz</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
