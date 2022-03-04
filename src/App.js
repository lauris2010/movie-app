
import useSticky from './hooks/useSticky.js'
import Nav from './nav/Nav';
import './App.css'
import Home from './home/Home.js';
import { Routes, Route } from "react-router-dom";
import Details from './movieDetails/Details.js';
import Footer from './footer/Footer.js';
import Search from './search/Search'

function App() {
  const { isSticky } = useSticky()

  return (
    <>
      <Nav sticky={isSticky}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>      
      <Footer/>
    </>
  );
}

export default App;
