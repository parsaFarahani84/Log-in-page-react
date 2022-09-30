import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Panel from "./components/Panel/Panel";

function App() {
  const [show, setShow] = useState(false);

  const checkHandler = function (data) {
    if (data === true) {
      setShow(true);
    }
  };

  return <div>{!show ? <Form checking={checkHandler} /> : <Panel />}</div>;
}

export default App;
