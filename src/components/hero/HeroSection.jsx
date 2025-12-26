import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookingCard from './BookingCard';

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
                  textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
                  mb: 2
                }}
              >
                <Box component="span" sx={{ color: 'secondary.main' }}>
                Expert Care, <br />
                Nurturing Happiness</Box>
              </Typography>

              <Typography variant="h6" sx={{ opacity: 0.9, mb: 3, maxWidth: '550px', fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
                NABH Accredited multi-specialty hospital providing world-class orthopedic, gynecological, and surgical care at affordable prices.
              </Typography>

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
                <Button variant="contained" color="secondary" size="large" endIcon={<ArrowForwardIcon />} sx={{ px: 4, py: 1.5, fontSize: '1rem' }}>
                  Book Appointment
                </Button>
                <Button variant="outlined" color="inherit" size="large" sx={{ borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  Our Specialities
                </Button>
              </Stack>
            </Grid>

            {/* Right Content - Doctor Image*/}
            <Grid item xs={12} md={6}>
              
              {/* Doctor Image */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '85%', sm: '70%', md: '100%' }, 
                  maxWidth: 500, 
                  zIndex: 2,
                  mr: { s: 'auto', lg: 28 }, 
                  ml: { s: 'auto', lg: 0 },
                  display: 'block'
                }}
              >
                <Box
                  component="img"
                  src="/assets/images/drviayupadhyay.webp"
                  alt="Dr. Vinay Upadhyay"
                  sx={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block', 
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                  }}
                />
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Trust Strip */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: -2 }, mb: 4, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {[
            { src: '/assets/images/PMKY-FINAL-LOGO-250-x-80-px-1.webp', alt: 'PM-JAY' },
            { src: '/assets/images/CGHS-FINAL-LOGO-250-x-80-px.webp', alt: 'CGHS' },
            { src: '/assets/images/NABH-150-x-100-px.webp', alt: 'NABH' },
          ].map((item, index) => (
            <Grid item xs={6} sm={3} key={index} sx={{ textAlign: 'center' }}>
              <Box sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'divider', p: 1.5, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 70, transition: 'all 0.3s ease', boxShadow: 1, '&:hover': { borderColor: 'primary.main', transform: 'translateY(-3px)', boxShadow: 3 } }}>
                {item.src ? <Box component="img" src={item.src} alt={item.alt} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /> : item.text}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* MOBILE STANDALONE CARD (Small Screens Only) */}
      <Container maxWidth="sm" sx={{
        pb: 4 
      }}>
        <BookingCard variant='standalone'/>
      </Container>

    </Box>
  );
};

export default HeroSection;