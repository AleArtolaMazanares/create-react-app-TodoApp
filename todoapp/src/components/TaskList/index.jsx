import React from "react";
import TodoItem from "../Items";

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={`todo-${index}`}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
