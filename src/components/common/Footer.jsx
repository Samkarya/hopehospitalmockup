import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1a2027', color: 'grey.300', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          
          {/* Column 1: About & Logo */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="secondary.main" fontWeight="bold" gutterBottom>
              THE HOPE HOSPITAL
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
              The Hope Hospital is a multi-specialty healthcare provider in Greater Noida committed to delivering 
              world-class medical care with empathy and excellence.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="secondary" aria-label="facebook"><FacebookIcon /></IconButton>
              <IconButton color="secondary" aria-label="twitter"><TwitterIcon /></IconButton>
              <IconButton color="secondary" aria-label="instagram"><InstagramIcon /></IconButton>
              <IconButton color="secondary" aria-label="youtube"><YouTubeIcon /></IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" color="white" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {['Home', 'About Us', 'Our Doctors', 'Treatments', 'International Patients', 'Contact Us'].map((link) => (
                <Link key={link} href="#" color="inherit" underline="hover" sx={{ fontSize: '0.9rem' }}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box display="flex" gap={1}>
                <LocationOnIcon color="secondary" fontSize="small" />
                <Typography variant="body2">
                  Delta II, Greater Noida,<br /> Uttar Pradesh 201308
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <PhoneIcon color="secondary" fontSize="small" />
                <Typography variant="body2">
                  +91-9667792126<br />
                  0120-4225085
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <EmailIcon color="secondary" fontSize="small" />
                <Typography variant="body2">
                  emergency@thehopehealthcare.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Column 4: Map */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Find Us
            </Typography>
            <Box sx={{ 
              width: '100%', 
              height: 180, 
              bgcolor: 'grey.800', 
              borderRadius: 2, 
              overflow: 'hidden' 
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.679267676712!2d77.5146!3d28.5191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzA4LjgiTiA3N8KwMzAnNTIuNiJF!5e0!3m2!1sen!2sin!4v1638200000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'grey.800' }} />

        <Box textAlign="center">
          <Typography variant="caption" color="grey.500">
            © {new Date().getFullYear()} The Hope Hospital. All Rights Reserved. | Designed with care.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;