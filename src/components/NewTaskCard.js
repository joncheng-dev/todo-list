import React from "react";

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

export default NewTaskCard;
