import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Avatar, 
  Stack, 
  Chip, 
  Divider, 
  Button 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React, { useEffect } from 'react'


const Singleblog = () => {
   
      const location = useLocation();
      const navigate = useNavigate();
      
      const blog = location.state?.blogData;

       useEffect(() => {
    if (!blog) {
      navigate('/blog');
    }
    window.scrollTo(0, 0);
  }, [blog, navigate]);



   if (!blog) return null; 



  return (
      <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', pb: 10 }}>

        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate(-1)}
          sx={{ textAlign: 'left' , mb: 3,  color: '#374151', padding:5 }}
        >
          Back to Blogs
        </Button>

      {/* 1. Header Section with Back Button */}
      <Container maxWidth="md"sx={{ pt: 5, textAlign: 'center' }}>
        
        <Typography variant="overline" color="primary" fontWeight="bold" sx={{ letterSpacing: 2, }}>
          {blog.category}
        </Typography>

        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mt: 1, mb: 3, lineHeight: 1.2 }}>
          {blog.title}
        </Typography>

        {/* 2. Author and Meta Info */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
            {blog.author[0]}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">{blog.author}</Typography>
            <Stack direction="row" spacing={2} sx={{ color: 'text.secondary' }}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <CalendarMonthIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption">{blog.published_date}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <AccessTimeIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption">{blog.reading_time || '5 min read'}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>

      {/* 3. Featured Image */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box 
          component="img"
          src={blog.image}
          alt={blog.title}
          sx={{ 
            width: '100%', 
            maxHeight: '500px', 
            objectFit: 'cover', 
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}
        />
      </Container>

      {/* 4. Content Section */}
      <Container maxWidth="md">
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: '#374151',
            whiteSpace: 'pre-line' // Preserve line breaks
          }}
        >
          {blog.content}
          {"\n\n"}
         
        </Typography>

        {/* Tags Section */}
        <Box sx={{ mt: 6 }}>
          <Divider sx={{ mb: 3 }} />
          <Stack direction="row" spacing={1}>
            {blog.tags?.map((tag, index) => (
              <Chip key={index} label={`#${tag}`} onClick={() => {}} clickable variant="outlined" />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Singleblog