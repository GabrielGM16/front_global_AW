// src/components/Home.js
import React from 'react';
import Dashboard from './Dashboard'; // Asegúrate de tener este componente
import Component1 from './CreateTask'; // Ejemplo de un componente adicional


const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="dashboard">
        <Dashboard />
        <Component1 />
        
        {/* Puedes agregar más componentes según sea necesario */}
      </div>
    </div>
  );
};

export default Home;
