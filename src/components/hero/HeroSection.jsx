import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookingCard from './BookingCard';

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', bgcolor: 'background.default' }}>

      {/* HERO BACKGROUND */}
      <Box
        sx={{position: 'relative', minHeight: { xs: 'auto', md: '90vh' }, width: '100%', background:'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)', display: 'flex', alignItems: 'center', pb: { xs: 4, md: 0 }, overflow: 'hidden', '&::after': {content: '""', position: 'absolute', bottom: 0, left: 0,
            right: 0,
            height: { xs: 40, md: 80 },
            bgcolor: 'background.default',
            borderRadius: '100% 100% 0 0'
          }
        }}
      >
        {/* BACKGROUND PATTERN */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">

            {/* LEFT CONTENT */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                color: 'white',
                pt: { xs: 10, md: 4 },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                mb={2}
              >
                <VerifiedUserIcon sx={{ color: 'secondary.main' }} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: 1.5
                  }}
                >
                  Greater Noida's Most Trusted Care
                </Typography>
              </Stack>

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2
                }}
              >
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  Expert Care,<br />Nurturing Happiness
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  mb: 3,
                  maxWidth: 550,
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                NABH Accredited multi-specialty hospital providing world-class
                orthopedic, gynecological, and surgical care at affordable prices.
              </Typography>

              <Stack
                direction="row"
                spacing={3}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                mb={4}
                flexWrap="wrap"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalHospitalIcon sx={{ color: 'secondary.main' }} />
                  <Typography fontWeight={600}>15+ Specialties</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeIcon sx={{ color: 'secondary.main' }} />
                  <Typography fontWeight={600}>24/7 Emergency</Typography>
                </Stack>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Book Appointment
                </Button>

                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Our Specialities
                </Button>
              </Stack>
            </Grid>

            {/* RIGHT CONTENT */}
            <Grid item xs={12} md={6} sx={{
              width: { xs: '85%', sm: '70%', md: '100%' },
              maxWidth: 500,
              mx: 'auto',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box
                component="img"
                src="assets/images/drviayupadhyay.webp"
                alt="Dr. Vinay Upadhyay"
                sx={{ width: '100%', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))', }}
              />
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* TRUST STRIP */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: -2 }, mb: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {[
            { src: 'assets/images/PMKY-FINAL-LOGO-250-x-80-px-1.webp' },
            { src: 'assets/images/CGHS-FINAL-LOGO-250-x-80-px.webp' },
            { src: 'assets/images/NABH-150-x-100-px.webp' }
          ].map((item, i) => (
            <Grid item xs={6} sm={3} key={i}>
              <Box
                sx={{
                  bgcolor: 'white',
                  p: 2,
                  borderRadius: 2,
                  height: 70,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 1
                }}
              >
                <Box component="img" src={item.src} sx={{ maxHeight: '100%' }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* BOOKING CARD */}
      <Container maxWidth="sm" sx={{ pb: 4 }}>
        <BookingCard variant="standalone" />
      </Container>

    </Box>
  );
};

export default HeroSection;