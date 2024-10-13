import React from 'react';
import '../styles/TaskList.css'; // Importar estilos

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
