import React, { useState, useReducer } from "react";
import List from "./components/List";
import tasksReducer from "./reducer";

function App() {
  const initialTasks = [
    { id: 0, text: "Visit Kafka Museum" },
    { id: 1, text: "Watch a puppet show" },
    { id: 2, text: "Lennon Wall pic" },
  ];

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <List tasks={tasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App;
