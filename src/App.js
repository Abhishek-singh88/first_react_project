
//import './App.css';
import { useState } from 'react';
import About from './COMPONENTS/About';
import Navbar from './COMPONENTS/Navbar';
import Textform from './COMPONENTS/Textform';
import Alert from './COMPONENTS/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const [mode,setmode] = useState('dark');
const [alert,setalert] = useState(null);

const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setalert(null);
    },2500)
}

const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title="React-Dark Mode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("O my Gosh,Light mode","danger");
      document.title="React- Mode"

    }

}
  return (
    <>
    <Router>
    <Navbar title="ABHI" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<Textform mode={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
