import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue(''); 
    }
  };


  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

 
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-btn" onClick={addTask}>
          <i className="fas fa-plus"></i> Add Task
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span
              onClick={() => toggleTaskCompletion(index)}
              className={task.completed ? 'completed' : ''}
            >
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              <i className="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
