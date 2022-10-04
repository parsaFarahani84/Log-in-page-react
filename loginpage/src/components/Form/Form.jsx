import React from "react";
import { useState } from "react";
import classes from "./Form.module.css";

function Form(props) {
  const [value, setValue] = useState("");
  console.log(props.pas);

  const passwordChecker = function (e) {
    e.preventDefault();
    setValue("");
    if (value == props.pas && value.length > 0) {
      props.checking(true);
      console.log("Yes");
    } else {
      console.log("NO");
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
