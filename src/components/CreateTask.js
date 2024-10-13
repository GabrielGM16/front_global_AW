import React, { useState } from 'react';

const CreateTask = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pendiente');

  const handleCreateTask = (e) => {
    e.preventDefault();
    const newTask = { title, dueDate, status };
    onTaskCreated(newTask);
    setTitle('');
    setDueDate('');
  };

  return (
    <div className="create-task-container">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleCreateTask}>
        <div>
          <label>Título:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Fecha de entrega:</label>
          <input 
            type="date" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Estado:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pendiente">Pendiente</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completado">Completado</option>
          </select>
        </div>
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CreateTask;
