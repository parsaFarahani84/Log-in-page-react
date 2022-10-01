import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Panel from "./components/Panel/Panel";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Password from "./components/Password/Password";
import classes from "../src/components/Panel/Panel.module.css";

function App() {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");

  const checkHandler = function (data) {
    if (data === true) {
      setShow(true);
    }
  };

  const pas = function (pas) {
    setPass(pas);
  };

  return (
    <BrowserRouter>
      <nav className={classes.navbar}>
        <Link to="/">
          {" "}
          <button className={classes.btn}>Log In</button>
        </Link>
        <Link to="/newpas">
          <button className={classes.btn}>Change Password</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/newpas" element={<Password newPas={pas} />}></Route>
        <Route
          path="/"
          element={
            !show ? <Form checking={checkHandler} pas={pass} /> : <Panel />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
