// src/components/Home.js
import React from 'react';
import '../styles/Home.css'; // Asegúrate de crear y ajustar este archivo CSS

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Bienvenido a la Task Management App</h2>
      <p className="home-description">
        Nuestra aplicación de gestión de tareas está diseñada para ayudarte a organizar y gestionar tus proyectos de forma efectiva y sencilla. 
        Ya seas un estudiante, un profesional, o parte de un equipo, nuestra plataforma te ofrece todas las herramientas necesarias para optimizar 
        tu productividad y alcanzar tus objetivos.
      </p>
      <img
        src="https://via.placeholder.com/600x300" // Cambia esta URL por la imagen que desees
        alt="Task Management Example"
        className="home-image"
      />
      <section className="home-features">
        <h3>Características de la aplicación</h3>
        <ul>
          <li>Creación de tareas personalizadas</li>
          <li>Asignación de tareas a miembros del equipo</li>
          <li>Seguimiento de progreso y plazos</li>
          <li>Notificaciones y recordatorios</li>
          <li>Interfaz intuitiva y fácil de usar</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
