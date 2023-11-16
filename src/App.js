import logo from './logo.svg';
import {useEffect, useState} from "react";
import UserData from './component/userData';

import { Route,Routes } from 'react-router-dom';

// import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';

const API = "https://jsonplaceholder.typicode.com/users";

function App() {

  return (
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/main' element={<Main/>}/>
    
  </Routes>
  
  );
}

export default App;