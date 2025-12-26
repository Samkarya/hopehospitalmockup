import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionTitle = ({ title, subtitle, align = 'center', color = 'primary' }) => {
  return (
    <Box sx={{ mb: 6, textAlign: align }}>
      <Typography 
        variant="h6" 
        component="span" 
        sx={{ 
          color: 'secondary.main', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          letterSpacing: 1.5,
          display: 'block',
          mb: 1
        }}
      >
        {subtitle}
      </Typography>
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ 
          color: `${color}.main`, 
          fontWeight: 700,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            display: align === 'center' ? 'block' : 'none',
            width: '60px',
            height: '4px',
            bgcolor: 'warning.main',
            mx: 'auto',
            mt: 2,
            borderRadius: 2
          }
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;