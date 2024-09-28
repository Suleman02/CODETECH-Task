import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  return (
    <div>
      <h1>Task Management Tool</h1>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default App;