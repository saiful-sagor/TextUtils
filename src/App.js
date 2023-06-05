import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = ()=>{
     if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#336469";
      showAlert("Dark Mode Enabled","success");
     }
     else{
      setMode("light");
      document.body.style.backgroundColor="paleturquoise"
      showAlert("Light Mode Enabled","success");
     }
  };
  return (
    <>


    <Router>
    <Navbar title= "TextUtils" aboutText = "About us" mode={mode} toggleMode = {toggleMode}/>
     <Alert alert ={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} header="Enter the text to analyze" mode={mode}/>} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      
    </Router>
    


    </>
  );
}

export default App;
