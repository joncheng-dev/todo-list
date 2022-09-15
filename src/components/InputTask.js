import React from "react";

const InputTask = (props) => {
  const { handleChange, handleAddingNewTask } = props;

  return (
    <React.Fragment>
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={handleAddingNewTask}>Add Task</button>
      </div>
    </React.Fragment>
  );
};

export default InputTask;
