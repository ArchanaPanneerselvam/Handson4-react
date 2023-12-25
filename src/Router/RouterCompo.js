import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs'
// import Student from './Student';
import Home from './Home';
import './Style.css';
import AddNew from './AddNew';
import Edit from './Edit';
import ContextData from './Context';
import Table from './Table';


const RouterCompo = () => {
    const[data,setData]=useState([
        {name:'Mahi',age:20,course:'MERN',batch:'2' },
        {name:'Kala',age:25,course:'MERN',batch:'2' }
    ])
  return (
    <BrowserRouter>
     <NavLink id='navbar'>
        <NavLink id='navbarlist' to='/'>Home</NavLink>
        <NavLink id='navabarlist' to='student'>Student</NavLink>
        <NavLink id='navbarlist' to ='contact'>Contact Us</NavLink>
     </NavLink>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='student'element={
        <ContextData.Provider value={{data:data, updateData:setData}}>
        <Table />
        </ContextData.Provider>}/>
        <Route path='addNewStudent'element={
        <ContextData.Provider value={{data:data, updateData:setData}}>
        <AddNew />
        </ContextData.Provider>}/>
        <Route path='editStudent'element={
        <ContextData.Provider value={{data:data, updateData:setData}}>
        <Edit />
        </ContextData.Provider>}/>
        <Route path='contact'element={<ContactUs/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default RouterCompo