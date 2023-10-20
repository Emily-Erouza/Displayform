
import './App.css';
// import Display from './components/Display';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     {/* <Login/>
     <Display/> */}

     <BrowserRouter>
      <Login />
    </BrowserRouter>
    </div>
  );
}

export default App;
