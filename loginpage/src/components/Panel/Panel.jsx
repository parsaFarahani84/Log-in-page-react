import React from "react";
import TodoList from "../Todo/TodoList";
import classes from "./Panel.module.css";
// import { Outlet, Link } from "react-router-dom";

function Panel() {
  return (
    <div>
      <div className={classes.mother}>
        <TodoList />
      </div>
    </div>
  );
}

export default Panel;
