import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, TextField, MenuItem, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const departments = ['Orthopedics', 'Gynecology', 'Cardiology', 'Neurology', 'General Medicine'];

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', bgcolor: 'background.default' }}>

      {/* Background Image Container */}
      <Box sx={{
        position: 'relative',
        height: { xs: '650px', md: '600px' }, // Taller on mobile to fit content
        width: '100%',
        backgroundImage: 'linear-gradient(to right, rgba(27, 94, 32, 0.9), rgba(76, 175, 80, 0.5)), url("https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', // Generic medical image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        clipPath: { md: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' } // Modern slant effect
      }}>

        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">

            {/* Left Content */}
            <Grid item xs={12} md={7} sx={{ color: 'white', pt: { xs: 8, md: 0 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <VerifiedUserIcon color="warning" />
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>
                  Greater Noida's Most Trusted Care
                </Typography>
              </Stack>

              <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2 }}>
                Expert Care, <br />
                <Box component="span" sx={{ color: 'secondary.main' }}>Nurturing Happiness</Box>
              </Typography>

              <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, maxWidth: '600px', fontWeight: 400 }}>
                NABH Accredited multi-specialty hospital providing world-class orthopedic, gynecological, and surgical care at affordable prices.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" color="primary" size="large" endIcon={<ArrowForwardIcon />}>
                  Find a Doctor
                </Button>
                <Button variant="outlined" color="inherit" size="large">
                  Our Specialities
                </Button>
              </Stack>
            </Grid>

            {/* Right Content - Floating Booking Card (Desktop) / Stacked (Mobile) */}
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={6} sx={{
                p: 3,
                width: '100%',
                maxWidth: 400,
                borderRadius: 2,
                mt: { xs: 2, md: 10 }, // Overlap effect logic
                bgcolor: 'white',
              }}>
                <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
                  Quick Appointment
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Skip the queue. Book your slot now.
                </Typography>

                <Stack spacing={2}>
                  <TextField label="Patient Name" fullWidth variant="outlined" />
                  <TextField label="Mobile Number" fullWidth variant="outlined" type="tel" />
                  <TextField select label="Select Department" fullWidth defaultValue="">
                    {departments.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Button variant="contained" color="secondary" fullWidth size="large" sx={{ py: 1.5 }}>
                    Book Now
                  </Button>
                  <Typography variant="caption" align="center" display="block" color="text.secondary">
                    Or call us at <Box component="span" fontWeight="bold" color="primary.main">0120-4225085</Box>
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Trust Strip (Logos) - Positioned below hero */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 2 }, mb: 4 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {[
            { src: '/assets/images/PMKY-FINAL-LOGO-250-x-80-px-1.webp', alt: 'PM-JAY' },
            { src: '/assets/images/CGHS-FINAL-LOGO-250-x-80-px.webp', alt: 'CGHS' },
            { src: '/assets/images/NABH-150-x-100-px.webp', alt: 'NABH' },
            { text: 'CASHLESS TPA' }
          ].map((item, index) => (
            <Grid item xs={6} sm={3} key={index} sx={{ textAlign: 'center' }}>
              <Box sx={{
                border: '1px dashed #ccc',
                p: 1,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
                bgcolor: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)',
                  boxShadow: 1
                }
              }}>
                {item.src ? (
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <Typography variant="button" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                    {item.text}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;