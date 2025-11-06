import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import ProgressChart from '../components/ProgressChart';

function Planner() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <h1 className="planner-title">📚 Smart Study Planner</h1>
      <button onClick={() => setDarkMode(!darkMode)} style={{ marginBottom: '20px' }}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Form Section Styled */}
      <div className="form-section">
        <TaskForm onAdd={addTask} />
      </div>

      {/* Task List Styled */}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />

      {/* Chart Section Styled */}
      <ProgressChart tasks={tasks} />

      {/* Footer */}
      <footer className="footer">
        Made by Ankita | GitHub: ankitasahay8
      </footer>
    </div>
  );
}

export default Planner;
