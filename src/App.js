import React from "react";
import { hot } from "react-hot-loader/root";

import "./App.css";
import TodoList from "./todos/TodoList";

const App = () => (
  <div>
    <h3 className="center">Getting stuff done</h3>
    <TodoList />
  </div>
);

export default hot(App);
