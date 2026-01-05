import React from 'react'
import { Box, Typography } from '@mui/material'
import Blog from './Blog'






const Home = () => {
  return (
    <>
     <Box height={400} color='white' bgcolor='black' display="flex"
  flexDirection="column" // Stacks items vertically
  justifyContent="center" // Centers content vertically
  alignItems="center"    // Centers content horizontally
      // Ensures the box takes the full screen height
  textAlign="center"  >

   

        <Typography variant='h2' component='span'  color='white' paddingBottom={2}  > Welcome to White Blos</Typography>

        <Typography  paddingLeft={15} > Start your blog today and join a community of writers and readers who are passionate about sharing their stories  and  ideas. <br /> We offer everything you need to get started, </Typography>
        
        

     </Box>

      <Blog  isHome={true} />
   
          
     
   
    </>
  )
}

export default Home