import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddingNewTask = () => {
    const task = {
      id: v4(),
      taskName: newTask,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  return (
    <React.Fragment>
      <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={handleAddingNewTask}>Add Task</button>
        </div>
        <div className="listTasks">
          {toDoList.map((task) => {
            return (
              <div>
                <h3>{task.taskName}</h3>
                <button onClick={() => deleteTask(task.id)}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
