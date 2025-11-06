import React from 'react';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-card">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            style={{ marginRight: '10px' }}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <strong>{task.title}</strong> ({task.subject}) — 
            <span className={`priority-label ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </span>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              marginLeft: '10px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px'
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
