import logo from './logo.svg';
import { useEffect, useState } from "react";
import UserData from './component/userData';

import { Route, Routes,Outlet } from 'react-router-dom';

// import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import AddScreen from './pages/AddScreen';
import Settings from './pages/Settings';
import More from './pages/More';
import SideBar from './component/sideBar';

const API = "https://jsonplaceholder.typicode.com/users";

function App() {

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Add' element={<AddScreen />} />
      <Route path='/sidebar' element={
        <div style={{}}>
        <SideBar>
            
        <Outlet />
      
    </SideBar>
    </div>
      }>
        {/* Default Route */}
          <Route index element={<Settings />} />

        <Route path="settings" element={<Settings />} />
        <Route path="more" element={<More />} />
      </Route>


    </Routes>

  );
}

export default App;