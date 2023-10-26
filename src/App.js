import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");  //wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextHub" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="my-2">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />}></Route>
            <Route exact path="/about" element={<About mode={mode} pageTitle={"About – TextHub"} />} ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
