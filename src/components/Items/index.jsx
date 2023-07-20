import React from "react";
import "../Items/style.css";

const TodoItem = ({ task, onComplete, onDelete }) => {
  return (
    <div className="prueba">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
        id="Tasks"
      />
      {task.task}

      <button onClick={() => onDelete(task.id)} id="delete">
        X
      </button>
    </div>
  );
};

export default TodoItem;
