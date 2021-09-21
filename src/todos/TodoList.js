import React from "react";

import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos = [{ text: "hello" }, { text: "there" }] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;
