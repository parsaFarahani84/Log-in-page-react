import React from "react";
import { useState } from "react";
import classes from "./Form.module.css";

function Form(props) {
  const [value, setValue] = useState("");

  const passwordChecker = function (e) {
    e.preventDefault();
    setValue("");
    if (value == 1111) {
      props.checking(true);
    }
  };

  return (
    <form className={classes.form} onSubmit={passwordChecker}>
      <h1 className={classes.h1}>Login Page:</h1>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="enter your password"
          className={classes.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={passwordChecker}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
