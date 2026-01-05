import React, { useState } from 'react';
import { Box, Container, Typography, Link, TextField, Button, Alert, Grid } from '@mui/material';


const Blogfooter = () => {

    const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false); // Email valid-ah nu check panna

  const handleSubscribe = () => {
    // Standard Email Regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      setSubscribed(true);
      setError(false);
      setEmail('');
    } else {
      setError(true); // Email thappa iruntha error state-ai true pannum
    }
  };



  return (
      
     <Box component="footer" sx={{ backgroundColor: '#111827', color: 'white', py: 8, px: 2 }}>
      <Container maxWidth="lg">
        {/* Grid container-la alignItems use panni elements-ai align panrom */}
        <Grid container spacing={4} justifyContent="space-between"> 

          {/* Section 1: About */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.light">
              White Blos
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              Start your blog today and join a community of writers and readers.
            </Typography>
          </Grid>

          {/* Section 2: Categories (Naduvula gap kidaikum) */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Categories
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover" variant="body2">React Tutorials</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Web Development</Link>
            </Box>
          </Grid>

          {/* Section 3: Resources */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover" variant="body2">Docs</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Privacy Policy</Link>
            </Box>
          </Grid>

          {/* Section 4: Subscribe Section 
              'align-self: flex-end' kudutha mattum thaan ithu adiyila (bottom-right) nirkum */}
          <Grid item xs={12} md={4} sx={{ alignSelf: 'flex-end', textAlign: { xs: 'left', md: 'right' } }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Subscribe to Updates
            </Typography>
            {subscribed ? (
              <Alert severity="success" sx={{ mt: 1 }}>Subscribed!</Alert>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: { md: 'flex-end' } }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Email address"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (error) setError(false); }}
                  error={error}
                  helperText={error ? "Invalid email" : ""}
                  sx={{ 
                    maxWidth: '300px',
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'gray' } }
                  }}
                />
                <Button variant="contained" onClick={handleSubscribe} sx={{ width: '150px' }}>
                  Subscribe
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>

        <Box textAlign="center" sx={{ pt: 6, mt: 6, borderTop: '1px solid #374151' }}>
          <Typography variant="caption" sx={{ color: 'gray' }}>
            &copy; {new Date().getFullYear()} White Blos.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Blogfooter