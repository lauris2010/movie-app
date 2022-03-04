import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './home/Home.js';
import Footer from './footer/Footer';

function App() {
  return (
    <>  
      <Routes> 
        <Route path='/' element={<Home/>}/> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
