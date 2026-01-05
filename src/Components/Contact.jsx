
import React, { useState } from 'react'
import { 
  Container, Box, Typography, TextField, Button, Stack, IconButton, Snackbar, Alert 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Contact = () => {


   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  // 2. Notification (Snackbar) control panna State
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Default browser action-ah stop panrom
    console.log("Message Sent:", formData); // Backend-ku data anuppurathu inga thaan nadakkum

    // Success notification-ah kaaturom
    setSnackbarOpen(true); 

    // Form fields ellam automatic-ah empty aagum
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <>
   <Box height={400} color='white' bgcolor='black' display="flex"
  flexDirection="column" // Stacks items vertically
  justifyContent="center" // Centers content vertically
  alignItems="center"    // Centers content horizontally
      // Ensures the box takes the full screen height
  textAlign="center"  >

   

        <Typography variant='h2' component='span'  color='white' paddingBottom={2}  > Contact page</Typography>

        
        
        

     </Box>
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5 }}>
        
        {/* LEFT SIDE: INFO (Black Box) */}
          
        {/* LEFT SIDE: INFO (Black Box) - Ipo ikonkal side-by-side varum */}
        <Box sx={{ flex: 1, bgcolor: '#000', color: '#fff', p: { xs: 4, md: 6 } }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>Get in Touch</Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 5 }}>Have a story to share or a question to ask? We'd love to hear from you.</Typography>
          
          {/* MUKKIYAM: Stack kulla Box use panni icons/text-ah side-by-side kondu vandhurukkom */}
          <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon sx={{ color: '#FF5722' }} />
                <Typography>hello@whiteblog.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon sx={{ color: '#FF5722' }} />
                <Typography>+91 98765 43210</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#FF5722' }} />
                <Typography>Chennai, Tamil Nadu</Typography>
              </Box>
          </Stack>

          {/* Social Media Icons Section (Adhuvum side-by-side varum) */}
          <Box sx={{ mt: 10 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Follow Us</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: '#fff', bgcolor: '#333', '&:hover': { bgcolor: '#FF5722' } }}><TwitterIcon /></IconButton>
              <IconButton sx={{ color: '#fff', bgcolor: '#333', '&:hover': { bgcolor: '#FF5722' } }}><InstagramIcon /></IconButton>
              <IconButton sx={{ color: '#fff', bgcolor: '#333', '&:hover': { bgcolor: '#FF5722' } }}><LinkedInIcon /></IconButton>
            </Stack>
          </Box>

        </Box>

        {/* RIGHT SIDE: FORM (White Box) */}
        <Box sx={{ flex: 1.5, p: { xs: 4, md: 6 }, bgcolor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>Send us a Message</Typography>
          
          {/* Form tag use panni submit event-ah handle panrom */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Box sx={{display: 'flex', gap: 2}}>
                <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} variant="standard" required />
                <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} variant="standard" required />
              </Box>
              <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} variant="standard" required />
              <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} variant="standard" multiline rows={4} required />
              
              <Button type="submit" variant="contained" size="large" sx={{ bgcolor: '#FF5722', borderRadius: '30px', px: 6, py: 1.5, textTransform: 'none', fontWeight: 'bold' }}>
                Send Message
              </Button>
            </Stack>
          </form>

        </Box>
      </Box>

      {/* Snackbar (Notification pop-up) */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', bgcolor: '#4caf50', color: 'white' }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>

    </Container>

  </>
  )
}

export default Contact