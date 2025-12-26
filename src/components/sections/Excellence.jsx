import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; // Ortho/General
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman'; // Gynae
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'; // Cardio
import ChildCareIcon from '@mui/icons-material/ChildCare'; // Peds
import PsychologyIcon from '@mui/icons-material/Psychology'; // Neuro
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'; // Surgery
import FaceIcon from '@mui/icons-material/Face'; // Derma/Plastic
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'; // Dental/ENT
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
    <Box id="treatments" sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle 
          title="Centers of Excellence" 
          subtitle="Comprehensive Care" 
        />
        
        <Grid container spacing={3}>
          {specialties.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper 
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
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
                    width: 60,
                    height: 60,
                    bgcolor: 'primary.light', // Light teal background
                    color: 'primary.dark',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem'} }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
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