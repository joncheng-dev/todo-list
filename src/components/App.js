import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  // Declare useState hook -- with variable and function to change it
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
    const newToDoList = [...toDoList, task];
    setToDoList(newToDoList);
  };

  const deleteTask = (taskName) => {
    const newToDoList = toDoList.filter((task) => {
      return task === taskName ? false : true;
    });
    setToDoList(newToDoList);
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
                <button
                  onClick={() => {
                    deleteTask(task);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
