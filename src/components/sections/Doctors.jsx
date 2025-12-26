import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button, Chip, Stack } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Data from homepageText.txt
const doctors = [
  {
    name: 'Dr. Vinoy Upadhyay',
    degrees: 'MBBS, MS (Ortho)',
    specialty: 'Sr. Orthopedic Surgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/download.png'
  },
  {
    name: 'Dr. Madhavi Rawat',
    degrees: 'MBBS, MD',
    specialty: 'Gynecologist',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/hope-hospital-team.png'
  },
  {
    name: 'Dr. Rahul Mavi',
    degrees: 'MBBS, MD',
    specialty: 'General Physician',
    img: '/assets/images/hopeteamDr_Rahul_Mavi.webp'
  },
  {
    name: 'Dr. Suddhatam Jain',
    degrees: 'MBBS, DNB',
    specialty: 'Laparoscopic Surgeon',
    img: '/assets/images/hopeteam_dr-shuddhatam-jain-general-and-laparoscopic-surgery-in-noida.webp'
  },
  {
    name: 'Dr. Parag Agarwal',
    degrees: 'MBBS, MD',
    specialty: 'Sr. Physician',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/dr._parag_agarwal-removebg-preview.png'
  },
  {
    name: 'Dr. Tarun Gupta',
    degrees: 'MBBS, MD',
    specialty: 'Neurosurgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/tarun-gupta-300x300.jpg'
  },
  {
    name: 'Dr. Deepak Rathore',
    degrees: 'MBBS, MS, MCH',
    specialty: 'Plastic & Cardio Surgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/Dr_Deepak-removebg-preview.png'
  },
  {
    name: 'Dr. Viviek Pathak',
    degrees: 'MBBS, MS (ENT)',
    specialty: 'ENT Surgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/Dr_Vivek_Pathak-removebg-preview.png'
  },
];

const Doctors = () => {
  return (
    <Box id="doctors" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Our Medical Experts"
          subtitle="Meet The Team"
        />

        <Grid container spacing={3} alignItems="stretch" sx={{
                  mx: 'auto',
                  display: 'flex',
                  justifyContent: 'center'
                }}> 
          {/* alignItems="stretch" ensures all grid items are same height */}
          {doctors.map((doc, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                    transform: 'translateY(-6px)',
                  }
                }}
              >
                {/* Green Header Background for Image */}
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    height: 100,
                    width: '100%',
                    position: 'relative',
                    mb: 5 // Space for the half-overlapping image
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -40,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      border: '4px solid white',
                      bgcolor: 'white',
                      overflow: 'hidden',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={doc.img}
                      alt={doc.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    align="center"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.dark',
                      fontSize: '1.05rem',
                      lineHeight: 1.3,
                      mb: 0.5
                    }}
                  >
                    {doc.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: 'text.secondary', mb: 1.5, fontWeight: 500 }}
                  >
                    {doc.degrees}
                  </Typography>

                  <Chip
                    label={doc.specialty}
                    size="small"
                    sx={{
                      bgcolor: 'secondary.light',
                      color: 'primary.dark',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      mb: 2
                    }}
                  />
                  
                  {/* Spacer to push button to bottom */}
                  <Box sx={{ flexGrow: 1 }} />

                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600
                    }}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" justifyContent="center" sx={{ mt: { xs: 4, md: 6 } }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, borderRadius: 2 }}
          >
            View All Doctors
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Doctors;