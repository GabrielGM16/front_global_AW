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
import PETCapture from './components/PETCapture';
import PETReport from './components/PETReport';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="app">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            
            {/* Rutas protegidas */}
            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-task" element={<CreateTask />} />
                <Route path="/task-list" element={<TaskList />} />
                <Route path="/pet-capture" element={<PETCapture />} />
                <Route path="/pet-report" element={<PETReport />} />
              </>
            ) : (
              <>
                <Route path="/dashboard" element={<Navigate to="/login" />} />
                <Route path="/create-task" element={<Navigate to="/login" />} />
                <Route path="/task-list" element={<Navigate to="/login" />} />
                <Route path="/pet-capture" element={<Navigate to="/login" />} />
                <Route path="/pet-report" element={<Navigate to="/login" />} />
              </>
            )}

            <Route path="*" element={<Navigate to="/" />} /> {/* Redirección a Home por defecto */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
