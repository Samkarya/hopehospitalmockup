import React from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const EmergencyFAB = () => {
  const handleClick = () => {
    window.open('https://wa.me/919667792126?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '500ms' }}>
      <Tooltip title="Chat on WhatsApp" placement="left" arrow>
        <Fab
          onClick={handleClick}
          aria-label="whatsapp"
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 24 },
            right: { xs: 16, md: 24 },
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            bgcolor: '#25D366',
            color: 'white',
            zIndex: 9999,
            '&:hover': {
              bgcolor: '#1ebc57',
              transform: 'scale(1.05)',
            },
            boxShadow: '0px 4px 20px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default EmergencyFAB;