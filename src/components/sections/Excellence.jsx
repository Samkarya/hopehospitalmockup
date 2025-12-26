import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FaceIcon from '@mui/icons-material/Face';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SectionTitle from '../common/SectionTitle';

const specialties = [
  { title: 'Orthopedics', icon: <HealthAndSafetyIcon fontSize="large" />, desc: 'Joint Replacements & Trauma' },
  { title: 'Obstetrics & Gynae', icon: <PregnantWomanIcon fontSize="large" />, desc: 'High-risk Pregnancy & IVF' },
  { title: 'Cardiology', icon: <MonitorHeartIcon fontSize="large" />, desc: 'Non-Invasive Cardiac Care' },
  { title: 'Pediatrics', icon: <ChildCareIcon fontSize="large" />, desc: 'Neonatal ICU (NICU) & Care' },
  { title: 'Neurology', icon: <PsychologyIcon fontSize="large" />, desc: 'Brain & Spine Surgeries' },
  { title: 'Laparoscopic Surgery', icon: <LocalHospitalIcon fontSize="large" />, desc: 'Minimally Invasive Surgery' },
  { title: 'Plastic Surgery', icon: <FaceIcon fontSize="large" />, desc: 'Cosmetic & Reconstructive' },
  { title: 'Dental Care', icon: <MedicalServicesIcon fontSize="large" />, desc: 'Implants & Root Canals' },
];

const Excellence = () => {
  return (
    <Box id="treatments" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Centers of Excellence"
          subtitle="Comprehensive Care"
        />

        <Grid container spacing={{ xs: 2, sm: 3 }} alignItems="stretch" sx={{
                  mx: 'auto',
                  display: 'flex',
                  justifyContent: 'space-around'
                }}>
          {specialties.map((item, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  border: '1px solid',
                  minWidth: 200,
                  borderColor: 'divider',
                  borderRadius: 3,
                  height: '100%', // Forces equal height
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main',
                    '& .icon-box': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    }
                  }
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: 'primary.light',
                    color: 'primary.dark',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    lineHeight: 1.2,
                    mb: 1
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '0.8rem', lineHeight: 1.4 }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Excellence;