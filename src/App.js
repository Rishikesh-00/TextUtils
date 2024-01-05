import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
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
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
         
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
