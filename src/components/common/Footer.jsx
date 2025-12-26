import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1a2027', color: 'grey.300', pt: { xs: 6, md: 8 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 4, lg: 6 }}>

          {/* Column 1: About & Logo - Reduced width on LG to prevent text stretch */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              component="img"
              src="assets/images/logo-hope.webp"
              alt="The Hope Hospital Logo"
              sx={{ height: 50, mb: 2, filter: 'brightness(1.2)' }}
            />
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8, color: 'grey.400' }}>
              The Hope Hospital is a multi-specialty healthcare provider in Greater Noida committed to delivering
              world-class medical care with empathy and excellence.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#1877f2', color: 'white' }
                }}
                aria-label="facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#e4405f', color: 'white' }
                }}
                aria-label="instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#ff0000', color: 'white' }
                }}
                aria-label="youtube"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: 'grey.300',
                  '&:hover': { bgcolor: '#25D366', color: 'white' }
                }}
                aria-label="whatsapp"
              >
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} sm={6} md={2} lg={2}>
            <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 2 }}>
              {['Home', 'About Us', 'Our Doctors', 'Treatments', 'International Patients', 'Contact Us'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  color="grey.400"
                  underline="none"
                  sx={{
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    '&:hover': { color: 'secondary.main', pl: 0.5 }
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Contact Info */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={2.5} sx={{ mt: 2 }}>
              <Box display="flex" gap={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ color: 'secondary.main', mt: 0.3 }} fontSize="small" />
                <Typography variant="body2" color="grey.400">
                  Delta II, Greater Noida,<br /> Uttar Pradesh 201308
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="flex-start">
                <PhoneIcon sx={{ color: 'secondary.main', mt: 0.3 }} fontSize="small" />
                <Typography variant="body2" color="grey.400">
                  <Box component="a" href="tel:+919667792126" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    +91-9667792126
                  </Box>
                  <br />
                  <Box component="a" href="tel:01204225085" sx={{ color: 'inherit', textDecoration: 'none' }}>
                    0120-4225085
                  </Box>
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="flex-start">
                <EmailIcon sx={{ color: 'secondary.main', mt: 0.3 }} fontSize="small" />
                <Typography variant="body2" color="grey.400">
                  <Box component="a" href="mailto:emergency@thehopehealthcare.com" sx={{ color: 'inherit', textDecoration: 'none', wordBreak: 'break-all' }}>
                    emergency@thehopehealthcare.com
                  </Box>
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Column 4: Map - Increased width on LG */}
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <Typography variant="subtitle1" color="white" fontWeight="bold" gutterBottom>
              Find Us
            </Typography>
            <Box sx={{
              width: '100%',
              height: { xs: 200, md: 180 },
              bgcolor: 'grey.800',
              borderRadius: 2,
              overflow: 'hidden',
              mt: 2,
              border: '1px solid #333'
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

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" color="grey.500">
            © {new Date().getFullYear()} The Hope Hospital. All Rights Reserved. | Designed with ❤️
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;