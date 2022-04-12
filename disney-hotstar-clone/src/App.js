import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Details from "./Components/Details";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = "/detail/:id" element = {<Details/>}/>
            <Route path = "/" element = {<Home/>}/>
            <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App