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

  const [have, setHave] = useState();

  const pas = function (pas) {
    setPass(pas);
  };

  return (
    <BrowserRouter>
      <nav className={classes.navbar}>
        <Link to="/login">
          {" "}
          <button className={classes.btn} onClick={() => setShow(false)}>
            Log In Page
          </button>
        </Link>
        <Link to="/">
          <button className={classes.btn}>Change Your Password</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Password newPas={pas} />}></Route>
        <Route
          path="/login"
          element={
            !show ? <Form checking={checkHandler} pas={pass} /> : <Panel />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
