import React, { useState } from "react";
import Form from "../form";
import "../TodoApp/style.css";
import TaskList from "../TaskList";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const onDelete = (id) => {
    setTasks([...tasks].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    console.log(`newTodo ${newTodo}`);
    let newItem = { id: +new Date(), task: newTodo, completed: false };
    setTasks([...tasks, newItem]);
  };

  const onComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        console.log(task);
        return task.id === Number(id)
          ? { ...task, completed: !task.completed }
          : { ...task };
      })
    );
  };

  const calcularCompletados = () => {
    let contador = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        contador += 1;
      }
    });
    return contador;
  };

  const completed = calcularCompletados();

  return (
    <div className="TodoApp">
      <h1>To do app</h1>
      <p>tareas completadas {completed}</p>
      <Form addTodo={addTodo} />
      <TaskList tasks={tasks} onDelete={onDelete} onComplete={onComplete} />
    </div>
  );
};

export default Todo;
