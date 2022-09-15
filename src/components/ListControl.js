import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import InputTask from "./InputTask";
import NewTaskCard from "./NewTaskCard";

function ListControl() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddingNewTask = () => {
    const task = {
      id: v4(),
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task]);
  };

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  return (
    <React.Fragment>
      <InputTask handleChange={handleChange} handleAddingNewTask={handleAddingNewTask} />
      <div className="listTasks">
        {toDoList.map((task) => {
          return <NewTaskCard taskName={task.taskName} id={task.id} completed={task.completed} completeTask={completeTask} deleteTask={deleteTask} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default ListControl;
