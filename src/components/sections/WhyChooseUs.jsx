import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Stack, Button, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '../common/SectionTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Features based on text file
const features = [
  { title: 'NABH Accredited', desc: 'Highest standard of safety and patient care protocols.' },
  { title: 'Affordable Care', desc: 'Committed to providing high-quality healthcare that is accessible to all.' },
  { title: 'Cashless Facility', desc: 'Tie-ups with all major TPAs and Insurance companies.' },
  { title: '24/7 Emergency', desc: 'Round-the-clock trauma, pharmacy, and ambulance services.' },
  { title: 'Ayushman Bharat', desc: 'Empanelled with PM-JAY and CGHS schemes.' },
  { title: 'Modern OT', desc: 'State-of-the-art modular operation theaters for infection control.' },
];

// Placeholder logos for insurance
const insurancePartners = ['Star Health', 'SBI General', 'TATA AIG', 'Cigna', 'Niva Bupa', 'ICICI Lombard'];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left: Text Content */}
          <Grid item xs={12} md={6}>
            <Chip
              label="Why Us"
              color="secondary"
              size="small"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Why Choose Hope Hospital?
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Since our inception, The Hope Hospital has been at the forefront of pioneering initiatives in Greater Noida.
              Our mission is to provide healthcare accessibility for all. Whether it's a complex knee surgery or
              general physician consultation, we strive for a 100% success rate.
            </Typography>

            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      '&:hover': { bgcolor: 'background.subtle' }
                    }}
                  >
                    <CheckCircleIcon color="secondary" sx={{ mt: 0.3, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {feature.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 4, borderRadius: 2, px: 3 }}
            >
              Read Chairman's Message
            </Button>
          </Grid>

          {/* Right: Insurance Grid (Visual Trust) */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: 'primary.main',
                p: { xs: 2, md: 3 },
                border: 'none',
                boxShadow: '0 12px 40px rgba(46, 125, 50, 0.3)',
                borderRadius: 4
              }}
            >
              <CardContent sx={{ p: { xs: 1, md: 2 } }}>
                <Typography variant="h6" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                  Our Insurance Partners (TPA)
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {insurancePartners.map((partner, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      <Box sx={{
                        bgcolor: 'white',
                        height: { xs: 60, md: 70 },
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        color: 'grey.600',
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        textAlign: 'center',
                        px: 1,
                        transition: 'all 0.2s',
                        '&:hover': { transform: 'scale(1.03)', boxShadow: 3 }
                      }}>
                        {partner}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', display: 'block' }}>
                    We also accept PM-JAY & CGHS cards.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default WhyChooseUs;