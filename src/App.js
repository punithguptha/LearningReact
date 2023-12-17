import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      {/* container  and my-3 is a bootstrap class */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
