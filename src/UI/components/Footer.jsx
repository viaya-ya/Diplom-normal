import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2, // добавляем отступы
      }}
    >
      <Typography variant="h6" component="div">
        My Website 
      </Typography>
      <Typography variant="body2" component="div">
        © 2024 My Website. All rights reserved.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2, // добавляем отступ сверху
        }}
      >
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ ml: 2 }}>
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
