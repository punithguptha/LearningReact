import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      {/* container  and my-3 is a bootstrap class */}
      <div className="container my-3" style={{ color: mode === "dark" ? "#c2c2c2" : "black" }}>
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
