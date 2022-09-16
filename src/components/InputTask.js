import React from "react";
import PropTypes from "prop-types";

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

InputTask.propTypes = {
  handleChange: PropTypes.func,
  handleAddingNewTask: PropTypes.func,
};

export default InputTask;
