import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Stack, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionTitle from '../common/SectionTitle';

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
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        
        <Grid container spacing={6} alignItems="center">
          {/* Left: Text Content */}
          <Grid item xs={12} md={6}>
            <SectionTitle 
              title="Why Choose Hope Hospital?" 
              subtitle="Excellence in Healthcare" 
              align="left"
            />
            <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4 }}>
              Since our inception, The Hope Hospital has been at the forefront of pioneering initiatives in Greater Noida. 
              Our mission is to provide healthcare accessibility for all. Whether it's a complex knee surgery or 
              general physician consultation, we strive for a 100% success rate.
            </Typography>

            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircleIcon color="secondary" sx={{ mt: 0.5 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
            
            <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
              Read Chairman's Message
            </Button>
          </Grid>

          {/* Right: Insurance Grid (Visual Trust) */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'primary.light', p: 1, border: 'none', boxShadow: 'none', borderRadius: 4 }}>
                <CardContent>
                    <Typography variant="h6" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                        Our Insurance Partners (TPA)
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        {insurancePartners.map((partner, index) => (
                            <Grid item xs={6} sm={4} key={index}>
                                <Box sx={{ 
                                    bgcolor: 'white', 
                                    height: 80, 
                                    borderRadius: 2, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    color: 'grey.600',
                                    boxShadow: 1
                                }}>
                                    {partner}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                         <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
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