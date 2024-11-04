// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ onLogout }) {
  return (
    <header className="header">
      <h1>Plataforma de Gestión de PET</h1>
      <nav>
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/dashboard" className="nav-button">Dashboard</Link>
        <Link to="/create-task" className="nav-button">Create Task</Link>
        <Link to="/task-list" className="nav-button">Task List</Link>
        <Link to="/pet-capture" className="nav-button">Captura de PET</Link>
        <Link to="/pet-report" className="nav-button">Reporte de PET</Link>
        <button onClick={onLogout} className="nav-button logout-button">Logout</button>
      </nav>
    </header>
  );
}

export default Header;
