import React from "react";
import { useState } from "react";
import classes from "./Password.module.css";

function Password(props) {
  const [pas, setPas] = useState(1111);

  const submitHandler = function (e) {
    e.preventDefault();
    console.log(pas);
    props.newPas(pas);
    setPas("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>Please Enter New Password:</h1>
      <div className={classes.div}>
        <input
          className={classes.input}
          value={pas}
          onChange={(e) => setPas(e.target.value)}
        />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Password;
