import React from 'react'
import { Container, Box, Typography, Divider, Stack, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; 

const About = () => {
  const backgroundImage = 'images.pexels.com';

  return (
    <>
    <Box height={400} color='white' bgcolor='black' display="flex"
  flexDirection="column" // Stacks items vertically
  justifyContent="center" // Centers content vertically
  alignItems="center"    // Centers content horizontally
      // Ensures the box takes the full screen height
  textAlign="center"  >

   

        <Typography variant='h2' component='span'  color='white' paddingBottom={2}  > About page</Typography>

        
        
        

     </Box>

       <Box sx={{ 
        bgcolor: '#fff', 
        py: { xs: 5, md: 10 },
       color: 'black', // Text white-ah maaridum
        textAlign: 'center',
        minHeight: '80vh', // Full page height eduthukkum
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        
        <InfoOutlinedIcon sx={{ fontSize: 60, color: '#FF5722', mb: 2 }} />
        
        <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: '900', mb: 3 }}>
          We Are <span style={{ color: '#FF5722' }}>White Blog</span>
        </Typography>
        
        <Typography variant="h6" sx={{ maxWidth: '700px', mx: 'auto', lineHeight: 1.8, mb: 4, color: '#171313ff' }}>
          Welcome to our community, founded in 2026. We focus on cutting-edge technology insights, creative stories, and a community-driven environment. We believe in the power of shared knowledge.
        </Typography>
        
        <Divider sx={{ my: 4, bgcolor: '#444' }} />

        {/* Icons sethu azhaga kaattalam */}
        <Stack direction="row" spacing={3} justifyContent="center">
          <IconButton sx={{ color: 'black', '&:hover': { color: '#FF5722' } }}><TwitterIcon /></IconButton>
          <IconButton sx={{ color: 'black', '&:hover': { color: '#FF5722' } }}><InstagramIcon /></IconButton>
          <IconButton sx={{ color: 'black', '&:hover': { color: '#FF5722' } }}><LinkedInIcon /></IconButton>
        </Stack>

      </Container>
    </Box>
    </>
  )
}

export default About