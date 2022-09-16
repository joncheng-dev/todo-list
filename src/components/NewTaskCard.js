import React from "react";
import PropTypes from "prop-types";

const NewTaskCard = (props) => {
  return (
    <React.Fragment>
      <div className="task" style={{ backgroundColor: props.completed ? "green" : "white" }}>
        <h3>{props.taskName}</h3>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
    </React.Fragment>
  );
};

NewTaskCard.propTypes = {
  completed: PropTypes.bool,
  taskName: PropTypes.string,
  completeTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default NewTaskCard;
