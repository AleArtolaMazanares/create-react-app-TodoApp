import React, { useState } from "react";
import Swal from "sweetalert2";
import "../form/style.css";

const Form = ({ addTodo }) => {
  const [name, setName] = useState("");

  const SendForm = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      addTodo(name);
      setName("");
    } else {
      Swal.fire("Any fool can use a computer");
    }
  };
  return (
    <div>
      <form onSubmit={SendForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          autoComplete="off"
          id="camp"
        />
        <button id="btnAdd">AddTasks</button>
      </form>
    </div>
  );
};

export default Form;
