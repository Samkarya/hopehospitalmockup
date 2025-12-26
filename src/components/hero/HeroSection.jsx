import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, TextField, MenuItem, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const departments = ['Orthopedics', 'Gynecology', 'Cardiology', 'Neurology', 'General Medicine', 'General Surgery'];

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', bgcolor: 'background.default' }}>

      {/* Background Container */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '90vh' },
        width: '100%',
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)',
        display: 'flex',
        alignItems: 'center',
        pb: { xs: 4, md: 0 },
        overflow: 'hidden',
        // Curved bottom edge
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 40, md: 80 },
          bgcolor: 'background.default',
          borderRadius: '100% 100% 0 0',
        }
      }}>

        {/* Background Pattern */}
        <Box sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">

            {/* Left Content */}
            <Grid item xs={12} md={6} sx={{ color: 'white', pt: { xs: 10, md: 4 } }}>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <VerifiedUserIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5, opacity: 0.95 }}>
                  Greater Noida's Most Trusted Care
                </Typography>
              </Stack>

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
                  lineHeight: 1.2,
                  fontWeight: 700,
                  mb: 2
                }}
              >
                Expert Care, <br />
                <Box component="span" sx={{ color: 'secondary.main' }}>Nurturing Happiness</Box>
              </Typography>

              <Typography variant="h6" sx={{ opacity: 0.9, mb: 3, maxWidth: '550px', fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
                NABH Accredited multi-specialty hospital providing world-class orthopedic, gynecological, and surgical care at affordable prices.
              </Typography>

              {/* Quick Stats */}
              <Stack direction="row" spacing={3} sx={{ mb: 4, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocalHospitalIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2" fontWeight={600}>15+ Specialties</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="body2" fontWeight={600}>24/7 Emergency</Typography>
                </Box>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Our Specialities
                </Button>
              </Stack>
            </Grid>

            {/* Right Content - Doctor Image + Floating Card */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative' }}>

              {/* Doctor Image */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '80%', sm: '70%', md: '85%' },
                  maxWidth: 400,
                  zIndex: 2
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/drviayupadhyay.webp"
                  alt="Dr. Vinay Upadhyay - Lead Orthopedic Surgeon"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                  }}
                />
              </Box>

              {/* Floating Booking Card (Desktop Only) */}
              <Paper
                elevation={8}
                sx={{
                  position: { xs: 'relative', md: 'absolute' },
                  bottom: { md: 40 },
                  right: { md: -20 },
                  p: 3,
                  width: { xs: '100%', md: 320 },
                  maxWidth: 350,
                  borderRadius: 3,
                  bgcolor: 'white',
                  mt: { xs: -4, md: 0 },
                  zIndex: 3,
                  display: { xs: 'none', lg: 'block' }
                }}
              >
                <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
                  Quick Appointment
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Skip the queue. Book your slot now.
                </Typography>

                <Stack spacing={1.5}>
                  <TextField label="Patient Name" fullWidth variant="outlined" size="small" />
                  <TextField label="Mobile Number" fullWidth variant="outlined" type="tel" size="small" />
                  <TextField select label="Department" fullWidth size="small" defaultValue="">
                    {departments.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Button variant="contained" color="secondary" fullWidth size="large" sx={{ py: 1.25 }}>
                    Book Now
                  </Button>
                  <Typography variant="caption" align="center" display="block" color="text.secondary">
                    Or call <Box component="span" fontWeight="bold" color="primary.main">0120-4225085</Box>
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Trust Strip (Logos) */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: -2 }, mb: 4, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {[
            { src: '/assets/images/PMKY-FINAL-LOGO-250-x-80-px-1.webp', alt: 'PM-JAY' },
            { src: '/assets/images/CGHS-FINAL-LOGO-250-x-80-px.webp', alt: 'CGHS' },
            { src: '/assets/images/NABH-150-x-100-px.webp', alt: 'NABH' },
            { text: 'CASHLESS TPA' }
          ].map((item, index) => (
            <Grid item xs={6} sm={3} key={index} sx={{ textAlign: 'center' }}>
              <Box sx={{
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'divider',
                p: 1.5,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 70,
                transition: 'all 0.3s ease',
                boxShadow: 1,
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-3px)',
                  boxShadow: 3
                }
              }}>
                {item.src ? (
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <Typography variant="button" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
                    {item.text}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mobile Quick Booking Form */}
      <Container maxWidth="sm" sx={{ display: { xs: 'block', lg: 'none' }, pb: 4 }}>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
          <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
            Quick Appointment
          </Typography>
          <Stack spacing={2}>
            <TextField label="Patient Name" fullWidth variant="outlined" />
            <TextField label="Mobile Number" fullWidth variant="outlined" type="tel" />
            <TextField select label="Department" fullWidth defaultValue="">
              {departments.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" color="secondary" fullWidth size="large" sx={{ py: 1.5 }}>
              Book Now
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default HeroSection;