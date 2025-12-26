import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionTitle = ({ title, subtitle, align = 'center', color = 'primary' }) => {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: align }}>
      <Typography
        variant="overline"
        component="span"
        sx={{
          color: 'secondary.main',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 2,
          display: 'block',
          mb: 1,
          fontSize: { xs: '0.7rem', sm: '0.75rem' }
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
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
          lineHeight: 1.3,
          '&::after': {
            content: '""',
            display: align === 'center' ? 'block' : 'none',
            width: '50px',
            height: '4px',
            bgcolor: 'secondary.main',
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