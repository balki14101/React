import logo from './logo.svg';
import {useEffect, useState} from "react";
import UserData from './component/userData';

import { Route,Routes } from 'react-router-dom';

// import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import AddScreen from './pages/AddScreen';
import Settings from './pages/Settings';
import More from './pages/More';

const API = "https://jsonplaceholder.typicode.com/users";

function App() {

  return (
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Add' element={<AddScreen/>}/>
    <Route path='/main' element={<Main/>}/>
{/* 
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/more' element={<More/>}/> */}
                
    
  </Routes>
  
  );
}

export default App;