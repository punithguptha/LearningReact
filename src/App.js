import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alerts";
import About from "./components/About";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert]=useState(null); //Here alert is an object

  
  const showAlert=(alertObj)=>{
    setAlert(alertObj);
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert({"alertType":"success","alertMessage":"Dark Mode Succesfully Enabled"});
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      showAlert({"alertType":"success","alertMessage":"Light Mode Successfully Enabled"});
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      {/* container  and my-3 is a bootstrap class */}
      <Alert alert={alert}/>
      <div className="container my-3" style={{ color: mode === "dark" ? "#c2c2c2" : "black" }}>
        {/* https://v5.reactrouter.com/web/guides/quick-start */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
