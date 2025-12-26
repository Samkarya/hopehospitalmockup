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

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {specialties.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main',
                    '& .icon-box': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'scale(1.1)',
                    }
                  }
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: { xs: 50, sm: 60 },
                    height: { xs: 50, sm: 60 },
                    bgcolor: 'primary.light',
                    color: 'primary.dark',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: { xs: 1.5, sm: 2 },
                    transition: 'all 0.3s ease',
                    '& svg': {
                      fontSize: { xs: '1.5rem', sm: '1.75rem' }
                    }
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
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