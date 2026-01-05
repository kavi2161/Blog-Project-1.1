import { Box, Card, CardActionArea, CardContent, Container, Divider, Grid, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogProps = ({cards}) => {
 
  if (!cards) return null;
   const navigate = useNavigate();
  const handleCardClick = () => {
   navigate(`/blog/${cards.id}`, { state: { blogData: cards } }); 
  };
  return (
  

    <Card    sx={{
        maxWidth: 350, // Let Grid handle width
        height: '400px', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.03)', // Slight scale effect
          boxShadow: 6,
         
        }
      }}
    >
      <CardActionArea  onClick={handleCardClick} >
        <Box>
          {/* Use the specific post data */}
          <img src={cards.image} alt={cards.title} width="100%" style={{ maxHeight: 230, objectFit: 'cover' }} />
        </Box>

        <CardContent sx={{ padding: '10px' }}>
          {/* Use the specific post data */}
          <Typography  variant="h6" component="div">
            {cards.title}
          </Typography>

          <Divider sx={{ my: 1 }} />

          {/* <Typography padding={1} variant="body2" sx={{ color: 'text.secondary' }}>
            {/* Use the specific post data (maybe truncate content here if desired) */}
            {/* {cards.content} */}
          {/* </Typography> */} 

          <Typography mt={0} mb={0} variant="body2" sx={{ color: 'text.secondary', fontSize: '15px', display: 'flex', alignItems: 'center' }} >
            <PersonIcon sx={{ fontSize: "14px", marginRight: '4px', color: 'black' }} />
            {cards.author}
          </Typography>

          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Published: {cards.published_date}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  ) 
}

export default BlogProps