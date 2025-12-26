import React from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const EmergencyFAB = () => {
  const handleClick = () => {
    // Standard WhatsApp API link
    window.open('https://wa.me/919667792126?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
  };

  return (
    <Zoom in={true} style={{ transitionDelay: '500ms' }}>
      <Tooltip title="Chat on WhatsApp" placement="left" arrow>
        <Fab
          onClick={handleClick}
          color="success" // WhatsApp Green-ish logic handled by MUI success or custom style
          aria-label="whatsapp"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 64,
            height: 64,
            bgcolor: '#25D366', // Official WhatsApp Color
            color: 'white',
            zIndex: 9999,
            '&:hover': {
              bgcolor: '#1ebc57',
            },
            boxShadow: '0px 4px 20px rgba(37, 211, 102, 0.4)'
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default EmergencyFAB;