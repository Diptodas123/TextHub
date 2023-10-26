import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState("light");  //wheather dark mode is enabled or not

  const toggleMode=()=>{
    if(mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor="white";
    }else{
      setmode("dark");
      document.body.style.backgroundColor="#042743";
    }
  }
  return (
    <>
      <Navbar title="StringHelper" mode={mode} toggleMode={toggleMode}/>
      <div className="my-3">
        <TextForm heading="Enter the text to analyse below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
