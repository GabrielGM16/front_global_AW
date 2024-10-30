// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Cambia a 'true' para probar rutas

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleRegister = (userData) => {
    setIsAuthenticated(true);
  };

  const handleTaskCreated = (newTask) => {
    // Lógica para manejar nueva tarea (puedes guardarla en el estado o base de datos)
    console.log('Nueva tarea creada:', newTask);
  };

  return (
    <Router>
      <div className="app">
        <Header onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            {!isAuthenticated ? (
              <>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-task" element={<CreateTask onTaskCreated={handleTaskCreated} />} />
                <Route path="/task-list" element={<TaskList tasks={[]} />} /> {/* Pasa tus tareas aquí */}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
