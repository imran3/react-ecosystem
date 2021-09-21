import React, { useState } from "react";

import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        value={inputValue}
        placeholder="What you wanna do?"
        onChange={(e) => setInputValue(e.target.value)}
        className="new-todo-input"
        type="text"
      />
      <button className="new-todo-button">Create todo</button>
    </div>
  );
};

export default NewTodoForm;
