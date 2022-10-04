import React, { useState } from "react";
import { useReducer } from "react";
import classes from "./TodoForm.module.css";
import { BsFillTrash2Fill } from "react-icons/bs";

const temp = function (name) {
  return {
    name: name,
    id: Math.random(),
  };
};

const reducer = function (state, action) {
  if (action.type === "ADD") {
    let upadatedData = temp(action.name);

    if (action.name) {
      return [upadatedData, ...state];
    }
  }
  if (action.type === "REMOVE") {
    state = state.filter((i) => i.id !== action.id);
    return state;
  }
};

function TodoList() {
  const [value, setValue] = useState("");
  const [data, dispatch] = useReducer(reducer, []);

  const submitHnadler = function (e) {
    e.preventDefault();
    dispatch({ type: "ADD", name: value });
    console.log(value);
    setValue("");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHnadler}>
        <input
          className={classes.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={classes.button}>Add</button>
      </form>
      <div>
        <ul className={classes.ul}>
          {data.map((e) => (
            <div>
              <li className={classes.li}>
                {e.name}
                <button
                  onClick={() => dispatch({ type: "REMOVE", id: e.id })}
                  className={classes.button}
                >
                  <BsFillTrash2Fill />
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
