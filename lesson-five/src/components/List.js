import React, { useState, Fragment } from "react";

function List({ tasks, onDeleteTask }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Fragment key={task.id}>
            <p> {task.text}</p>
            <button onClick={() => onDeleteTask(task.id)}>delete</button>
            <hr />
          </Fragment>
        );
      })}
    </div>
  );
}

export default List;
