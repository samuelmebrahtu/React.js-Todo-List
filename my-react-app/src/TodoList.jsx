import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take shower",
    "Walk dog",
  ]);

  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function handleEditInputChange(event) {
    setEditTaskText(event.target.value);
  }

  function editTask(index) {
    setEditIndex(index);
    setEditTaskText(tasks[index]);
  }

  function saveTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? editTaskText : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTaskText("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-list">
      <h1>Samuel's Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div className="task-item">
                <input
                  type="text"
                  value={editTaskText}
                  onChange={handleEditInputChange}
                />
                <button className="save-button" onClick={() => saveTask(index)}>
                  Save
                </button>
              </div>
            ) : (
              <div className="task-item">
                <span className="text">{task}</span>
                <input type="checkbox" />
                <button className="edit-button" onClick={() => editTask(index)}>
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
