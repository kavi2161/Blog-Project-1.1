import React, { useState } from 'react'
import { 
  Dialog, DialogTitle, DialogContent, TextField, Button, 
  Box, Alert, Collapse, IconButton, Typography 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Exit button-ku
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import { useNavigate } from 'react-router-dom';

const Login = ({ open, handleClose, onLoginSuccess }) => {

  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

   const handleSubmit = () => {
    if (isLoginView) {
      // LOGIN LOGIC
      if (email === "user@gmail.com" && password === "2161") {
        onLoginSuccess(email[0]); 
        handleClose();
      } else {
        setError(true);
      }
    } else {
      // SIGN UP LOGIC (Simple-ah success nu vachipoam)
      if (email && password && name) {
        onLoginSuccess(name[0]); // User name-oda first letter
        handleClose();
      } else {
        setError(true);
      }
    }
  };


   const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError(false);
  };

  return (
      <Dialog 
      open={open} 
      onClose={handleClose} 
      maxWidth="xs" 
      fullWidth
      PaperProps={{ sx: { borderRadius: '20px', p: 1 } }}
    >
      <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 15, top: 15 }}>
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Box sx={{ bgcolor: '#FF5722', p: 1.5, borderRadius: '50%', mb: 1, display: 'flex' }}>
            {isLoginView ? <LockOutlinedIcon sx={{ color: 'white' }} /> : <PersonAddOutlinedIcon sx={{ color: 'white' }} />}
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {isLoginView ? "Welcome Back" : "Create Account"}
          </Typography>
        </Box>

        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>{isLoginView ? "Invalid Credentials!" : "Please fill all fields!"}</Alert>
        </Collapse>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Sign up View-la irundha mattum Name field theriyum */}
          {!isLoginView && (
            <TextField label="Full Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
          )}
          
          <TextField label="Email Address" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />

          <Button 
            variant="contained" 
            fullWidth 
            onClick={handleSubmit} 
            sx={{ py: 1.5, borderRadius: '12px', bgcolor: '#FF5722', fontWeight: 'bold' }}
          >
            {isLoginView ? "Sign In" : "Sign Up"}
          </Button>

          <Typography variant="body2" align="center">
            {isLoginView ? "Don't have an account?" : "Already have an account?"} {' '}
            <span 
              onClick={toggleView} 
              style={{ color: '#FF5722', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {isLoginView ? "Sign Up" : "Login"}
            </span>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>

  )
}

export default Login