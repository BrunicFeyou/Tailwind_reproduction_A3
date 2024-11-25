import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/homePage';
import Christmas from './pages/ChrismasPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path = "/christmas" element = {<Christmas/>} />
      </Routes>
    </BrowserRouter>  )}



export default App;
