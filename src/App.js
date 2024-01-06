import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  // for alert message
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    // for alert message timeout
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  
// for dark and light mode
const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled","success")
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;