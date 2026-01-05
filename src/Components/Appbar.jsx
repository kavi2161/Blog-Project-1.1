import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, CssBaseline, TextField, Avatar } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo-svg.svg'
import { Link, useLocation } from 'react-router-dom';


const Appbar = ({ setSearchQuery, onLoginClick, user }) => {
 
     const location = useLocation();

 const navItems = [
     { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact', path: '/contact' },
 ];
 

  return (
   <>
      <CssBaseline />
     <AppBar position="static" sx={{ backgroundColor: '#000', boxShadow: 'none',margin:0,padding:0 }}>
     
     
        <Toolbar disableGutters sx={{paddingRight:10}}>
        
          <img src={Logo} alt=" WhiteBlog" style={{height:'70px',marginRight:'auto', paddingLeft:0,}}  />
          

         
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center',paddingRight:15 }}>
            {navItems.map((item,index) => (
              <Button
                key={index}
                component={Link} 
                to={item.path}    
                sx={{ 
                  color: '#fff', 
                  textTransform: 'none',
                  mx: 1.5, 
                  '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: '#FF5722',
                    textDecorationThickness: '2px',
                    backgroundColor: 'transparent',
                  },
                  
                  ...(location.pathname === item.path && {
                    textDecoration: 'underline',
                    textDecorationColor: '#FF5722',
                    textDecorationThickness: '2px',
                  }),
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
            
              <TextField 
          placeholder="Search..." 
          variant="standard"
          onChange={(e) => setSearchQuery(e.target.value)} // Inga type panna App.jsx-la update aagum
          sx={{ bgcolor: 'white', borderRadius: 1, px: 2 }}
        />

            <IconButton size="small" sx={{ color: '#fff', mx: 0.5 }}>
              <SearchIcon fontSize="small" />
            </IconButton>

            
            {user ? (
              /* User Login aana apram idhu theriyum */
              <Avatar sx={{ bgcolor: '#FF5722', ml: 2, cursor: 'pointer' }}>
                {user.toUpperCase()}
              </Avatar>
            ) : (
              /* User Login aagala na intha button theriyum */
              <Button 
                variant="contained" 
                onClick={onLoginClick} // Inga thaan App.jsx-oda state trigger aagum
                sx={{ 
                  ml: 2, 
                  backgroundColor: '#FF5722', 
                  '&:hover': {
                    backgroundColor: '#e64a19', 
                  },
                  borderRadius: '4px',
                  padding: '8px 16px',
                }}
              >
                Log in
              </Button>
            )}
          </Box>
        </Toolbar>
     
    </AppBar>
   
   
   </>
  )
}

export default Appbar