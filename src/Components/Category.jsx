import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'

// const Category = ({ categories, selectedCategory, onCategoryChange  }) => {

//     const handleTabChange = (event, newValue) => {
//     onCategoryChange(newValue);
//   };

  const Category = ({ name  }) => {

  //   const handleTabChange = (event, newValue) => {
  //   onCategoryChange(newValue);
  // };


  return (
  //  <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
  //     <Tabs
  //       value={selectedCategory}
  //       onChange={handleTabChange}
  //       // Allows the tabs to scroll horizontally on small screens
  //       variant="scrollable" 
  //       scrollButtons="auto"
  //       aria-label="blog categories navigation"
  //     >
  //       {categories.map((category) => (
  //         <Tab 
  //           key={category} 
  //           label={category} 
  //           value={category} 
  //           // The 'All' tab will appear exactly as you showed in the image
  //           sx={category === 'All' ? { color: 'primary.main', fontWeight: 'bold' } : {}}
  //         />
  //       ))}
  //     </Tabs>
  //   </Box>

  <Box sx={{ mt: 4, mb: 2 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          color: '#1a237e', 
          textTransform: 'uppercase',
          borderLeft: '6px solid #1a237e',
          pl: 2
        }}
      >
        {name}
      </Typography>
      <Divider sx={{ mt: 1, mb: 3 }} />
    </Box>

  )
}



export default Category