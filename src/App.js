// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" about="About Us" />
      <div className="container">
      <TextForm heading="Enter the text to analyse"/>
      </div>
    </>
  );
}

export default App;
