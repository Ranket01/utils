import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";



function App() {
  const [mode, setMode] = useState("light");
  const [btnname, setbtnname] = useState("DarkMode");
  const [alert, setalert] = useState(null);

  const Alert_Function = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnname("LightMode");
      document.body.style.backgroundColor = "black";
      Alert_Function("DarkMode has been enabled", "success");
    } else {
      setMode("light");
      setbtnname("DarkMode");
      document.body.style.backgroundColor = "white";
      Alert_Function("LightMode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        togglefunction={togglemode}
        mode={mode}
        btnname={btnname}
      />
      <Alert alert={alert} />

      <Form
        heading="Enter Text Here To Analysis"
        mode={mode}
        Alert_Function={Alert_Function}
      />
      <About mode={mode} />
    </>
  );
}

export default App;
