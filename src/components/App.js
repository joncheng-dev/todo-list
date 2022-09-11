import React from "react";

function App() {
  // Declare useState hook -- with variable and function to change it
  const [toDoList, setToDoList] = useState([]);

  return (
    <React.Fragment>
      <div className="App">
        <div className="addTask">
          <input />
          <button>Add Task</button>
        </div>
        <div className="listTasks"></div>
      </div>
    </React.Fragment>
  );
}

export default App;
