
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appbar from './Components/Appbar'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'


import Login from './Login'
import Blogfooter from './Components/Blogfooter'
import Singleblog from './Components/Singleblog'

const App = () => {

   const [searchQuery, setSearchQuery] = useState("");

   const [openLogin, setOpenLogin] = useState(false);
   const [user, setUser] = useState(null); 

    const handleLoginSuccess = (userData) => {
      setUser(userData); 
    console.log("Logged in as:", userData);
  };


  return (
   
  

    <BrowserRouter>
    <Appbar  setSearchQuery={setSearchQuery} onLoginClick={() => setOpenLogin(true)}  user={user}  />
      <Login 
        open={openLogin} 
        handleClose={() => setOpenLogin(false)} 
        onLoginSuccess={handleLoginSuccess} 
      />
    <Routes>
      <Route  path='/'  element={<Home/>} />
      <Route  path='/about'  element={<About/>} />
      <Route  path='/blog'  element={<Blog searchQuery={searchQuery}  />} />
      <Route path='/contact'  element={<Contact/>}/>
      <Route path='/blog/:id' element={<Singleblog/> } />
      
    </Routes>
    <Blogfooter/>
    </BrowserRouter>

  
   
  )
}

export default App