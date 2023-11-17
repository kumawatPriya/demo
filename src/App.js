import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login';
import { Home } from './pages/Home';

// import  Navbar  from './Navbar';
// import  Slider  from './Slider';
// import thepic from "./spring.jpg"

function App() {
  return (
    <>

    {/* <Navbar/> */}
    {/* <Navbar title="Textutils" home="TextBlog" aboutText="MoreAbout"/> */}
    {/* <Navbar title="Textutils" home="TextBlog"/> */}
    {/* <Slider image={thepic}/> */}
    <BrowserRouter>
    
    <Routes>
    
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
  

    </>
  );
}

export default App;
