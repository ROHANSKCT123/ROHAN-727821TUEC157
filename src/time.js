import React, { useState } from 'react';
import './time.css';

function Time() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    // Reset edit mode if the task being edited is deleted
    if (editTaskIndex === index) {
      setEditTaskIndex(-1);
      setEditedTask('');
    }
  };

  const updateTask = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editTaskIndex] = editedTask;
      setTasks(updatedTasks);
      setEditTaskIndex(-1);
      setEditedTask('');
    }
  };

  return (
    <div className="App">
      <h2>Task Management App</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editTaskIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={updateTask}>Update</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => setEditTaskIndex(index)}>Edit</button>
              </>
            )}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Time;
