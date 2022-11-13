import React from 'react'
import { Routes,Route } from 'react-router-dom';
import HomePage from '../Components/Home/HomePage';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';

function AllRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<HomePage/>}></Route>
        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'/signup'} element={<SignUp/>}></Route>
    </Routes>
  )
}

export default AllRoutes;