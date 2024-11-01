// src/components/Dashboard.js
import React from 'react';
import '../styles/Dashboard.css';

const tasks = [
  { id: 1, title: 'Desarrollar componente Login', status: 'En Progreso', dueDate: '2024-10-20' },
  { id: 2, title: 'Configurar base de datos', status: 'Completado', dueDate: '2024-10-15' },
  { id: 3, title: 'Diseñar pantalla de Dashboard', status: 'Pendiente', dueDate: '2024-10-22' }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Tablero de Tareas</h2>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.status.toLowerCase()}`}>
            <h3 className="task-title">{task.title}</h3>
            <p className="task-due-date">Fecha de entrega: {task.dueDate}</p>
            <p className="task-status">Estado: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;