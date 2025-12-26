import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';
import SectionTitle from '../common/SectionTitle';

// Data from homepageText.txt
const doctors = [
  {
    name: 'Dr. Vinoy Upadhyay',
    degrees: 'MBBS, MS (Ortho)',
    specialty: 'Sr. Orthopedic Surgeon',
    role: 'Chairman & Director',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/download.png' // Replace with dr_vinoy.jpg
  },
  {
    name: 'Dr. Madhavi Rawat',
    degrees: 'MBBS, MD',
    specialty: 'Gynecologist',
    role: 'Senior Consultant',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/hope-hospital-team.png' // Replace with dr_madhavi.jpg
  },
  {
    name: 'Dr. Rahul Mavi',
    degrees: 'MBBS, MD',
    specialty: 'General Physician',
    role: 'Consultant',
    img: '/assets/images/hopeteamDr_Rahul_Mavi.webp'
  },
  {
    name: 'Dr. Suddhatam Jain',
    degrees: 'MBBS, DNB',
    specialty: 'Laparoscopic Surgeon',
    role: 'Senior Surgeon',
    img: '/assets/images/hopeteam_dr-shuddhatam-jain-general-and-laparoscopic-surgery-in-noida.webp'
  },
  {
    name: 'Dr. Parag Agarwal',
    degrees: 'MBBS, MD',
    specialty: 'Sr. Physician',
    role: 'Internal Medicine',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/dr._parag_agarwal-removebg-preview.png'
  },
  {
    name: 'Dr. Tarun Gupta',
    degrees: 'MBBS, MD',
    specialty: 'Neurosurgeon',
    role: 'Brain & Spine Expert',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/tarun-gupta-300x300.jpg'
  },
  {
    name: 'Dr. Deepak Rathore',
    degrees: 'MBBS, MS, MCH',
    specialty: 'Plastic & Cardio Surgeon',
    role: 'Senior Surgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/Dr_Deepak-removebg-preview.png'
  },
  {
    name: 'Dr. Viviek Pathak',
    degrees: 'MBBS, MS (ENT)',
    specialty: 'ENT Surgeon',
    role: 'Senior Surgeon',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/Dr_Vivek_Pathak-removebg-preview.png'
  },
];

const Doctors = () => {
  return (
    <Box id="doctors" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Our Medical Experts"
          subtitle="Meet The Team"
        />

        <Grid container spacing={4}>
          {doctors.map((doc, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  mt: 4, // Space for avatar overlap
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }
                }}
              >
                {/* Avatar Overlap Effect */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: -5 }}>
                  <CardMedia
                    component="img"
                    image={doc.img}
                    alt={doc.name}
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      border: '4px solid white',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      objectFit: 'cover',
                      bgcolor: '#eee'
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 2 }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                    {doc.name}
                  </Typography>

                  {/* Degrees are important in India for trust */}
                  <Typography variant="caption" display="block" sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}>
                    {doc.degrees}
                  </Typography>

                  <Chip
                    label={doc.specialty}
                    size="small"
                    sx={{
                      bgcolor: 'secondary.light',
                      color: 'primary.dark',
                      fontWeight: 600,
                      mb: 2
                    }}
                  />

                  <Box mt="auto">
                    <Button variant="outlined" color="secondary" fullWidth size="small">
                      Book Appointment
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" size="large" color="primary">
            View All Doctors
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Doctors;