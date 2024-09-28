import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/tasks', {
      name,
      description,
      dueDate,
      priority,
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={event => setDescription(event.target.value)} />
      </label>
      <br />
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={event => setDueDate(event.target.value)} />
      </label>
      <br />
      <label>
        Priority:
        <select value={priority} onChange={event => setPriority(event.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;