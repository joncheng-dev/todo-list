import React from "react";

const NewTaskCard = (props) => {
  return (
    <div className="task">
      <h3>{props.taskName}</h3>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

export default NewTaskCard;
