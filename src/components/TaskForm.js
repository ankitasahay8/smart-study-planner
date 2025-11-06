import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [task, setTask] = useState({ title: '', subject: '', deadline: '', priority: 'Medium' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...task, id: Date.now(), completed: false });
    setTask({ title: '', subject: '', deadline: '', priority: 'Medium' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Task Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      <input placeholder="Subject" value={task.subject} onChange={(e) => setTask({ ...task, subject: e.target.value })} required />
      <input type="date" value={task.deadline} onChange={(e) => setTask({ ...task, deadline: e.target.value })} required />
      <select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
