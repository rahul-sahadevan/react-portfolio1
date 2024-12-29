import React from "react";
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home";



const App = ()=>{


  return(
    <>
    
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App