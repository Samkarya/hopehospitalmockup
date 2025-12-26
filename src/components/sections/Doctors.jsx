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
    role: 'Chairman & Director',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/download.png'
  },
  {
    name: 'Dr. Madhavi Rawat',
    degrees: 'MBBS, MD',
    specialty: 'Gynecologist',
    role: 'Senior Consultant',
    img: 'https://thehopehospital.org/wp-content/uploads/2024/09/hope-hospital-team.png'
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
    <Box id="doctors" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Our Medical Experts"
          subtitle="Meet The Team"
        />

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {doctors.map((doc, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                    transform: 'translateY(-6px)',
                  }
                }}
              >
                {/* Doctor Image */}
                <Box
                  sx={{
                    position: 'relative',
                    bgcolor: 'primary.light',
                    pt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={doc.img}
                    alt={doc.name}
                    sx={{
                      width: { xs: 80, sm: 100, md: 110 },
                      height: { xs: 80, sm: 100, md: 110 },
                      borderRadius: '50%',
                      border: '4px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      objectFit: 'cover',
                      bgcolor: 'grey.100'
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: { xs: 1.5, sm: 2 } }}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.dark',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.3,
                      mb: 0.5
                    }}
                  >
                    {doc.name}
                  </Typography>

                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}
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
                      fontSize: { xs: '0.65rem', sm: '0.7rem' },
                      height: 'auto',
                      py: 0.5,
                      mb: 1.5
                    }}
                  />

                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    fullWidth
                    sx={{
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      py: { xs: 0.5, sm: 0.75 },
                      borderRadius: 2,
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